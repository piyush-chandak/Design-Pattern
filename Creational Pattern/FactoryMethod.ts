// Factory Method Pattern
// - Creational Design Pattern
// - Interface to create object in super class
// - Allows subclasses to alter the type of objects that will be created
// - Solves the problem of creating product objects without specifying their concrete classes
// - Just need to pass object type and than call methods

// Usage
// - Use when we want to save system resources by reusing existing objects instead of rebuilding them each time
// - Use when we want to provide users of your library or framework with a way to extend its internal components
// - Use when we don’t know beforehand the exact types and dependencies of the objects our code should work with

// Reference
// - https://refactoring.guru/design-patterns/factory-method
// - https://www.dofactory.com/javascript/design-patterns/factory-method

// ----------------------------------------------------------------------------------------
// |                                  Way 1                                               |
// ----------------------------------------------------------------------------------------
console.log('-------- Way 1 --------');
enum Product {
  PRODUCT1,
  PRODUCT2
};
abstract class ProductW1 { // We can use interface also rather than creating abstract factory
  public abstract name(): string;
}

class Product1W1 extends ProductW1 {
  public name(): string {
    return 'Product 1';
  }  
}

class Product2W1 extends ProductW1 {
  public name(): string {
    return 'Product 2';
  }  
}

class FactoryMethodW1 {
  public static createProduct(type: number): ProductW1 {
    switch (type) {
      case Product.PRODUCT1: return new Product1W1();
      case Product.PRODUCT2: return new Product2W1();
    }
  }
}
let productW1: ProductW1;
productW1 = FactoryMethodW1.createProduct(Product.PRODUCT1);
console.log(productW1.name());

productW1 = FactoryMethodW1.createProduct(Product.PRODUCT2);
console.log(productW1.name());

// ----------------------------------------------------------------------------------------
// |                                  Way 2                                               |
// ----------------------------------------------------------------------------------------
console.log('-------- Way 2 --------');
const Product1W2 = function() {
  return {
    name: function() {
      return 'Product 1';
    }
  }
};

const Product2W2 = function() {
  return {
    name: function() {
      return 'Product 2';
    }
  }
};

const FactoryMethodW2 = (function () {
  return {
    createProduct: function (type) {
      switch (type) {
        case 1: return Product1W2();
        case 2: return Product2W2();
      }
    }
  };
})();
let productW2; // To access
productW2 = FactoryMethodW2.createProduct(1);
console.log(productW2.name());

productW2 = FactoryMethodW2.createProduct(2);
console.log(productW2.name());
