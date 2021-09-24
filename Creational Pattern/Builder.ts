// Builder Pattern
// - Creational Design Pattern
// - Builds a complex object using simple objects and using a step by step approach
// - It doesn’t require all object should have common properties

// Usage
// - Useful when we need to create an object with lots of possible configuration options

// Reference
// - https://refactoring.guru/design-patterns/builder
// - https://www.dofactory.com/javascript/design-patterns/builder

// ----------------------------------------------------------------------------------------
// |                                  Way 1                                               |
// ----------------------------------------------------------------------------------------
console.log('-------- Way 1 --------');
class HouseBuilderW1 {
  private name: string;
  private houseItems = [];

  constructor(name: string) {
    this.name = name;
  }

  buildDoor(): HouseBuilderW1 {
    this.houseItems.push('door');
    return this;
  }

  buildTerace(): HouseBuilderW1 {
    this.houseItems.push('terace');
    return this;
  }

  buildRoom(): HouseBuilderW1 {
    this.houseItems.push('room');
    return this;
  }

  buildStairs(): HouseBuilderW1 {
    this.houseItems.push('stairs');
    return this;
  }

  getHouse(): void {
    console.log(`${this.name} is having ${this.houseItems.length ? this.houseItems : 'no items'}`);
  }
}

const houseBuilder1W1 = new HouseBuilderW1('MyHouse 1');
houseBuilder1W1
  .buildDoor()
  .buildRoom()
  .buildStairs()
  .buildTerace()
  .getHouse();

const houseBuilder2W1 = new HouseBuilderW1('MyHouse 2');
houseBuilder2W1
  .getHouse();


// ----------------------------------------------------------------------------------------
// |                                  Way 2                                               |
// ----------------------------------------------------------------------------------------
console.log('-------- Way 2 --------');
type HouseItems = {
  door?: boolean;
  room?: boolean;
  stairs?: boolean;
  window?: boolean;
}

class HouseBuilderW2 {
  private name: string;
  private houseItems = [];

  constructor(name: string, {door, room, stairs, window}: HouseItems = {}) {
    this.name = name;

    if (door) {
      this.houseItems.push('door');
    }
    if (room) {
      this.houseItems.push('room');
    }
    if (stairs) {
      this.houseItems.push('stairs');
    }
    if (window) {
      this.houseItems.push('window');
    }
  }

  getHouse(): void {
    console.log(`${this.name} is having ${this.houseItems.length ? this.houseItems : 'no items'}`);
  }
}

const houseBuilder1W2 = new HouseBuilderW2('MyHouse 1', {door: true, room: true});
houseBuilder1W2.getHouse();

const houseBuilder2W2 = new HouseBuilderW2('MyHouse 2');
houseBuilder2W2.getHouse();

