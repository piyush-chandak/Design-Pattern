// Strategy Pattern
// - Behaviour Design Pattern
// - Encapsulates alternative algorithms (or strategies) for a particular task
// - Class behavior or its algorithm can be changed at run time
// - Define a family of algorithms, put each of them into a separate class, and make their objects interchangeable
// - Group of algorithms that are interchangeable

// Usage
// - When we want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime
// - When we have a lot of similar classes that only differ in the way they execute some behavior.
// - When we class has a massive conditional operator that switches between different variants of the same algorithm
// - To isolate the business logic of a class from the implementation details of algorithms that may not be as important in the context of that logic

// Reference
// - https://refactoring.guru/design-patterns/strategy
// - https://www.dofactory.com/javascript/design-patterns/strategy

abstract class Payment {
  abstract pay(): void;
  abstract fee(): void;
}

class Cash extends Payment {
  pay(): void {
    console.log("Paying using Cash");
  }

  fee(): void {
    console.log("No Fee Charge for Cash");
  }
}

class UPI extends Payment {
  pay(): void {
    console.log("Paying using UPI");
  }

  fee(): void {
    console.log("Fee Charge is 5% for UPI");
  }
}

class Stripe extends Payment {
  pay(): void {
    console.log("Paying using Stripe");
  }

  fee(): void {
    console.log("Fee Charge is 10% for Stripe");
  }
}

function processTransaction(paymentType: Payment) {
  paymentType.fee();
  paymentType.pay();
}

processTransaction(new Cash());
processTransaction(new UPI());
processTransaction(new Stripe());
