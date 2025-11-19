//Object type

const studentt = {
  name: "Md.Ekhlasur Rahman",
  age: 25,
};
function printStudent(user: { name: string; age: number }): void {
  //! void use kora hoyeche karon kono kichu return kore na
  console.log(`\n${user.name} is ${user.age} Years Old.`);
}

printStudent(studentt);

//Type Alias with function parameter
type Student = {
  name: string;
  age: number;
  isCaptain: boolean;
};
function showUser(user: Student) {
  console.log(user.name);
  console.log(user.age);
}
const user1 = {
  name: "Ekhlasur",
  age: 26,
  isCaptain: true,
};

showUser(user1);

//Product type
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string; //optional property
  isAvailable: boolean;
};
const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 55555,
  description: "A high perfomance laptop",
  isAvailable: true,
};
const product2: Product = {
  id: 212,
  name: "Mobile",
  price: 5999,
  description: "A high perfomance Mobile for gamers",
  isAvailable: true,
};
