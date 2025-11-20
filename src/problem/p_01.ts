// TODO 01 Sum of two numbers || দুইটি number ইনপুট নিলে যোগফল return করবে।
function addTowNumber(a: number, b: number) {
  return a + b;
}

console.log("Sum tow number::: ", addTowNumber(5, 6));

// TODO 02 Check even or odd ||  একটি number জোড় না বিজোড় সেটা return করবে।
function Check(degit: number): string {
  return degit % 2 === 0 ? "Even Number" : "Odd Number";
}
console.log("The degit is=", Check(5));

// TODO 03 Check even or odd ||  একটি string উল্টে দাও।

function reverseText(text: string): string {
  return text.split("").reverse().join("");
}
console.log(reverseText("bangladesh"));

// TODO 04 Array sum || একটি number array এর মোট যোগফল দাও।
function arraySum(nums: number[]): number {
  return nums.reduce((sum, n) => sum + n, 0);
}
console.log("Array sum is: ", arraySum([10, 20, 30]));
// TODO 05 Filter even numbers ||  array থেকে শুধু even সংখ্যা বের করো।
function getEvenNumbers(num: number[]): number[] {
  return num.filter((n) => n % 2 === 0);
}
console.log("Array Even Number Filter: ", getEvenNumbers([10, 20, 30]));

// TODO 06 User interface create || একটি User interface তৈরি করে object বানাও।

interface User {
  name: string;
  age: number;
  email: string;
}
const user: User = {
  name: "Ekhlasur Rahman",
  age: 26,
  email: "ekhlsurrahman@gmail.com",
};
console.log("User Interface is:", user);

// TODO 07 Optional property handle || discount optional, কিন্তু থাকলে price কমাবে।
function claculatePrice(price: number, discount?: number): number {
  if (discount) {
    return price - (price * discount) / 100;
  }
  return price;
}
console.log("Product Price Without discount:", claculatePrice(1000, 15));

//TODO 08 Class + constructor  || Car class বানাও → brand ও model প্রিন্ট
class Car {
  constructor(public brand: string, public model: string) {}
  info() {
    return `"All Car Barnd Name:"   ${this.brand} And ${this.model}`;
  }
}
const car = new Car("BMW", "TVS");
console.log(car.info());

//TODO 09  Generic function   ||যেকোনো টাইপ return করা generic function বানাও।
function wrap<T>(value: T): T {
  return value;
}
console.log(wrap<string>("Ekhlasur Rahman"));
console.log(wrap<number>(+8801518750416));
