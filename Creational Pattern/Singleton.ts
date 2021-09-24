// Singleton Pattern
// - Creational Design Pattern
// - System-wide actions need to be coordinated from a single central place
// - Providing global access point

// Example(ther might be more usecase)
// - database connection pool
// - Logger

// Conditions
// - Private constructor to restrict instantiation of the class from other classes.
// - Define all constructors to be protected or private.
// - Private static variable of the same class that is the only instance of the class.
// - Public static method that returns the instance of the class, this is the global access point for outer world to get the instance of the singleton class.

// Reference
// - https://refactoring.guru/design-patterns/singleton
// - https://www.dofactory.com/javascript/design-patterns/singleton

// ----------------------------------------------------------------------------------------
// |                                  Way 1                                               |
// ----------------------------------------------------------------------------------------
console.log('-------- Way 1 --------');
class SingletonW1 {
  private static instance: SingletonW1;

  private constructor() { }

  public static getInstance(): SingletonW1 {
    if (!SingletonW1.instance) {
        SingletonW1.instance = new SingletonW1();
        console.log('New Instance for SingletonW1 is created');
    }
    console.log('Instance of SingletonW1 is return');
    return SingletonW1.instance;
  }
}
SingletonW1.getInstance(); // To access
SingletonW1.getInstance(); // To access

// ----------------------------------------------------------------------------------------
// |                                  Way 2                                               |
// ----------------------------------------------------------------------------------------
console.log('-------- Way 2 --------');
class SingletonW2 {
  private static instance: SingletonW2;

  constructor () {
    if (!SingletonW2.instance) {
      SingletonW2.instance = this;
      console.log('New Instance for SingletonW2 is created');
    }
    console.log('Instance of SingletonW2 is return');
    return SingletonW2.instance;
  }
}

const instance = new SingletonW2();
Object.freeze(instance);

export default instance;
// importing in another file and using it

// ----------------------------------------------------------------------------------------
// |                                  Way 3                                               |
// ----------------------------------------------------------------------------------------
console.log('-------- Way 3 --------');
const SingletonW3 = (function () {
  var instance;

  return {
    getInstance: function () {
      if (!instance) {
        instance = new Object();
        console.log('New Instance for SingletonW3 is created');
      }
      console.log('Instance of SingletonW3 is return');
      return instance;
    }
  };
})();
SingletonW3.getInstance(); // To access
SingletonW3.getInstance(); // To access