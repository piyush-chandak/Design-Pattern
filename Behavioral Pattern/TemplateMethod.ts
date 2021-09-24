// Template Method Pattern
// - Behaviour Design Pattern
// - Defines the skeleton in the superclass
// - Lets subclasses override specific steps of superclass without changing its structure

// Usage
// - When we want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure
// - When we have several classes that contain almost identical algorithms with some minor differences

// Reference
// - https://refactoring.guru/design-patterns/template-method
// - https://www.dofactory.com/javascript/design-patterns/template-method

abstract class Game {
  protected abstract initialize(): void;
  protected abstract startPlay(): void;
  protected abstract endPlay(): void;

  //template method
  public play(): void {
    this.initialize(); // initialize the game
    this.startPlay(); // start game
    this.endPlay(); // end game
  }
}

class Cricket extends Game {
  protected initialize(): void {
    console.log("Cricket Game Initialized");
  }

  protected startPlay(): void {
    console.log("Cricket Game Started");
  }

  protected endPlay(): void {
    console.log("Cricket Game Finished");
  }
}

class Football extends Game {
  protected initialize(): void {
    console.log("Football Game Initialized");
  }

  protected startPlay(): void {
    console.log("Football Game Started");
  }

  protected endPlay(): void {
    console.log("Football Game Finished");
  }
}

const cricket: Cricket = new Cricket();
cricket.play();

const football: Football = new Football();
football.play();
