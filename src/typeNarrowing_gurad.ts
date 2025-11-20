//type narrowing //type guard
function log(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed());
  }
}
log("Hi, I am a full stack web developer");
log(524);

//TODO handle from input validation
function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log("Parsed as a number with multiply 2:", input * 2);
  } else {
    console.log("parsed as string", input.trim());
  }
}
processInput("Hello world");
processInput(59);

//type guard in TS
function display(val: string | number) {
  if (typeof val === "string") {
    console.log("I am string", val.toUpperCase());
  } else {
    console.log("this is a number", val.toFixed(2));
  }
}

display("full stack web developer");
display(5.15245555);

// in operator typr guard (premative data er jonno)
type Car = {
  drive: () => void;
};
type Boat = {
  sail: () => void;
};
function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
const car: Car = {
  drive: () => {
    console.log("!!! car is driving");
  },
};
move(car);

//instance of type guard ((object er sathe kaj korar jonno))

class Dog {
  bark() {
    console.log("woof woof!!");
  }
}
class Cat {
  meow() {
    console.log("meow meow!!");
  }
}
function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
const dog = new Dog();
const cat = new Cat();
makeSound(dog);
makeSound(cat);
