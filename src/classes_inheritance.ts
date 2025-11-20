class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //greet as a method
  greet() {
    console.log(`Hello,${this.name}! He/She is ${this.age} years old.`);
  }
}
const user1 = new Person("Ekhlasur", 26);
user1.greet();
const user2 = new Person("Rahman", 24);
console.log(user2.name);

// modifire (public,privet,protected)
//public: access from anywhere
//privet: only class (inside class access)
//proctected: only class and sub-class

//create a bank account class
class bankAccount {
  public accountName: string;
  private balance: number;
  protected accountType: string;

  constructor(name: string, amount: number) {
    this.accountName = name;
    this.balance = amount;
    this.accountType = "savings"; //by default
  }
  public showBalance() {
    console.log(`your balance is:${this.balance}`);
  }
}

const account1 = new bankAccount("Ekhlasur Rahman", 55999);
account1.showBalance();
console.log(account1.accountName);
// console.log(account1.accountType); //not accessable

//TODO Inharitance in TypeScript
// Base class
class Animal {
  //   public name: string;
  constructor(public name: string) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving...`);
  }
}

// Derived class
class Dog extends Animal {
  bark() {
    console.log("Woof Woof!");
  }
}

// Creating an instance of Dog
const myDog = new Dog("tommy");
myDog.move(); // Inherited from Animal
myDog.bark(); // Defined in Dog
