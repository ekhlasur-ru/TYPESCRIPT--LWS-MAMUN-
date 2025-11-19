//TODO add teo numbers

function Add(a: number, b: number): number {
  return a + b;
}
console.log("Addition:", Add(5, 6));

//TODO substract two numbers with arrow function
const substract = (a: number, b: number): number => a - b;
console.log("substract", substract(5, 6));

//TODO multiply two numbers with arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};
console.log("multiply:", multiply(5, 6));

//TODO divide two numbers with arrow function
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("connot divide by zero");
  }
  return a / b;
};
console.log("divide:", divide(5, 6).toFixed(3));

//TODO exponention of two numbers with arrow function
const power = (base: number, exponent: number = 2): number => {
  return Math.pow(base, exponent);
};
console.log("Power:", power(5, 2));

//Make Calculator
function calculator(operation: string, a: number, b: number): number {
  switch (operation) {
    case "+":
      return Add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "^":
      return power(a, b);
    default:
      throw new Error("Invalid operation");
  }
}
console.log("Calculator Addition:", calculator("+", 10, 5));
console.log("calculator Subtract:", calculator("-", 10, 5));
console.log("Calculator Multiply:", calculator("*", 10, 5));
console.log("Calculator Divide:", calculator("/", 10, 5).toFixed(3));
console.log("Calculator Power:", calculator("^", 10, 2));
// console.log("Unwanted operation", calculator("%", 5, 8));   //for testing error

//2:30 minutes mamun
