// Observer Pattern
// - Behaviour Design Pattern
// - Based on Subscription model
// - Subscription mechanism to notify multiple objects

// Usage
// - When we want to notify to many object on change of once

// Subject
// - Maintains list of observers. Any number of Observer objects may observe a Subject
// - Implements an interface that lets observer objects subscribe or unsubscribe
// - Sends a notification to its observers when its state changes

// Observers
// - Has a function signature that can be invoked when Subject changes (i.e. event occurs)

// Reference
// - https://refactoring.guru/design-patterns/observer
// - https://www.dofactory.com/javascript/design-patterns/observer

class Subscriber {
  private subscribers = {};

  public subscribe(eventType: string, observer: Observer) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = []  
    }
    this.subscribers[eventType].push(observer);
    console.log(`Observer: ${observer.getName()} subscribe to event: ${eventType}`);
  }

  public unsubscribe(eventType: string, observer: Observer) {
    if (this.subscribers[eventType]) {
      const index = this.subscribers[eventType].indexOf(observer);
      this.subscribers[eventType].splice(index, 1);
      console.log(`Observer: ${observer.getName()} unsubscribe to event: ${eventType}`);
    }
  }

  public notify(eventType: string) {
    for(let subsciber of this.subscribers[eventType]) {
      console.log(`Subsriber: ${subsciber.getName()} is updating for event: ${eventType}`);
      subsciber.update();
    }
  }
}

abstract class Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Observer ${name} is created`);
  }

  getName(): string {
    return this.name;
  }

  abstract update(): void;
}


class Observer1 extends Observer {
  constructor(name: string) {
    super(name);
    console.log(`${super.getName()} of Observer1 is created`);
  }

  update(): void {
    console.log(`Notifying method call of Observer1: ${this.getName()}`);
  }
}

class Observer2 extends Observer {
  constructor(name: string) {
    super(name);
    console.log(`${super.getName()} of Observer2 is created`);
  }

  update(): void {
    console.log(`Notifying method call of Observer2: ${this.getName()}`);
  }
}

class Observer3 extends Observer {
  constructor(name: string) {
    super(name);
    console.log(`${super.getName()} of Observer3 is created`);
  }

  update(): void {
    console.log(`Notifying method call of Observer3: ${this.getName()}`);
  }
}

const EVENTS = {
  ONE: 'Event1',
  TWO: 'Event2',
}

const subscriber = new Subscriber();
const observer1 = new Observer1('observer1');
const observer2 = new Observer2('observer2');
const observer3 = new Observer3('observer3');
const observer4 = new Observer2('observer4');

console.log('-------- Subscribing --------');
subscriber.subscribe(EVENTS.ONE, observer1);
subscriber.subscribe(EVENTS.ONE, observer2);
subscriber.subscribe(EVENTS.TWO, observer3);
subscriber.subscribe(EVENTS.TWO, observer4);

console.log('-------- Event Trigger --------');
subscriber.notify(EVENTS.ONE);
subscriber.notify(EVENTS.TWO);

console.log('-------- Unsubscribing --------');
subscriber.unsubscribe(EVENTS.ONE, observer1);
subscriber.unsubscribe(EVENTS.TWO, observer3);

console.log('-------- Event Trigger --------');
subscriber.notify(EVENTS.ONE);
subscriber.notify(EVENTS.TWO);
