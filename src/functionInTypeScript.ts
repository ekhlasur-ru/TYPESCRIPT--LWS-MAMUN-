//!function structure in JS
// function funcName(parameter){
//     logic here
// }
//!function structure in TS
// function funcName(parameterName:type):rturnType{
//     logic here
// }

// TODO function with parameter and return type
function greet(name: string) {
  return `Hello,${name}! Welcome to Typescript Finction.`;
}
console.log(greet("Ekhlasur"));

// TODO function type signature
let greetFunction: (name: string) => string;

greetFunction = function (name: string): string {
  return `Hi,${name}! This is a function type signature example.`;
};
console.log(greetFunction("Faisal"));

// console.log(parameter("argument"));
//! optional and dfault parameter in function in typescript
function introduce(
  name: string,
  age?: number, //optional parameter
  country: string = "Bangladesh" //default parameter
): string {
  return `My name is ${name}. I am ${
    age ? age + " years old" : "ageless"
  } from ${country}.`;
}

console.log(introduce("ekhlasur", 25));
console.log(introduce("Faisal"));
console.log(introduce("Arif", undefined, "India"));

// TODO return types in typescript function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(50, 80));
function concatinatAdd(a: number, b: string): string {
  // function concatinatAdd(a: number, b: string): number {
  return a + b;
}
console.log(concatinatAdd(60, "88"));

// TODO VOID types in typescript function
function logmessage(message: string): void {
  console.log("Log message:", message);
}
logmessage("This is a void function example.");

//!  never types in typescript function
// function throwerror(): never {
//   throw new Error("Something went wrong!");
// }
// throwerror();

//TODO Arrow function in typesript
// function newAdd(a: number, b: number): number {
//   return a + b;
// }

const newAdd = (x: number, y: number): number => {
  return x + y;
};
console.log(newAdd(5, 8));
