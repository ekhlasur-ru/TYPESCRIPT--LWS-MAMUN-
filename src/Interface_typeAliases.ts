//TODO type aliases (not margeable two same type)
type Customer = {
  name: string;
  age: number;
  email: string;
};
//!   duplicate type  alias error
type Customer = {
  address: string;
};

//defien Interface (margeable two same interface)
interface newCustomer {
  name: string;
  age: number;
  address: string;
  email: string;
}

//TODO Margable interface example
interface Person {
  name: string;
}
interface Person {
  age: number;
}
const margePersone: Person = {
  name: "Ehalsur Rahman",
  age: 26,
};

//TODO extending Interface with example
//step1 parent type
interface Animal {
  name: string;
}
//step2 child type
interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Tomy",
  breed: "light golden",
};
console.log(myDog);
