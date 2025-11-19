//TODO array
let score = [100, 85, 92, 60];
score.push(30);
console.log(score);

let result: Array<number> = [10, 5, 9, 6];
score.push(3);
console.log(result);

//TODO truple data type
let student: [string, number, boolean] = ["Ekhlasur Rahman", 25, true];
console.log(student[0]);

//TODO Any data type
let data = 25;
data = "Ekhlasur Rahman";
data = true;

let data2: any = "Ekhlasur Rahman";
data2 = 30;

//TODO unknown data type  (if we want to assign unknown type data to other type variable we have to check the type first)
let countryName: unknown = "Bangladesh";
if (typeof countryName === "string") {
  console.log(countryName.toUpperCase());
}

//void data type (usually used in function when there is no return type )
function logMessage(): void {
  console.log("logged successfully");
}

function greeting(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greeting("Ekhlas Sordar"));

//TODO null data type (no value)
let nothing: null = null;

//TODO undefine data type (value is not assigned)
let name;
console.log(name);
let age: undefined = undefined;

// TODO auto type inference (typescript automatically detects the data type)
let city = "Rjashahi";
city = 50; 


