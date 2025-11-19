//type aliases (not margeable two same type)
type Customer = {
  name: string;
  age: number;
  email: string;
};
// duplicate type  alias error
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

//Margable interface example
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



