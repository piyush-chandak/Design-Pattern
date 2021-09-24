// Abstract Factory Method Pattern
// - Creational Design Pattern
// - Creates objects that are related by a common theme
// - Produce families of related objects without specifying their concrete classes
// - Solves the problem of creating entire product families without specifying their concrete classes

// Usage
// - Use when we want to create object which use common parent

// Reference
// - https://refactoring.guru/design-patterns/abstract-factory
// - https://www.dofactory.com/javascript/design-patterns/abstract-factory

enum Shape {
  RECTANGLE,
  SQUARE
}

enum ShapeType {
  CURVE,
  SHARP
}

interface IShape {
  name(): void;
}

abstract class Rectangle implements IShape {
  abstract name(): void;
}

abstract class Square implements IShape {
  abstract name(): void;
}

class CurveRectangle extends Rectangle {
  name(): void {
    console.log('Curve Rectangle');
  }
}

class SharpRectangle extends Rectangle {
  name(): void {
    console.log('Sharp Rectangle');
  }
}

class CurveSquare extends Square {
  name(): void {
    console.log('Curve Square');
  }
}

class SharpSquare extends Square {
  name(): void {
    console.log('Sharp Square');
  }
}

interface IShapeFactory {
  getByShape(shapeType: number): IShape;
}

class SharpShapeFactory implements IShapeFactory {
  public getByShape(shapeType: number): IShape {
    switch(shapeType) {
      case Shape.RECTANGLE: return new SharpRectangle();
      case Shape.SQUARE: return new SharpSquare();
    }
  }
}

class CurveShapeFactory implements IShapeFactory {
  public getByShape(shapeType: number): IShape {
    switch(shapeType) {
      case Shape.RECTANGLE: return new CurveRectangle();
      case Shape.SQUARE: return new CurveSquare();
    }
  }
}

class ShapeFactory {
  public static getShape(type: number): IShapeFactory {
    switch(type) {
      case ShapeType.SHARP: return new SharpShapeFactory();
      case ShapeType.CURVE: return new CurveShapeFactory();
      default: return new SharpShapeFactory();
    }
  }
}

let shapeFactory: IShapeFactory;
shapeFactory = ShapeFactory.getShape(ShapeType.SHARP);
const sharpRectangle = shapeFactory.getByShape(Shape.RECTANGLE);
sharpRectangle.name();

const sharpSquare = shapeFactory.getByShape(Shape.SQUARE);
sharpSquare.name();

shapeFactory = ShapeFactory.getShape(ShapeType.CURVE);
const curveRectangle = shapeFactory.getByShape(Shape.RECTANGLE);
curveRectangle.name();

const curveSquare = shapeFactory.getByShape(Shape.SQUARE);
curveSquare.name();
