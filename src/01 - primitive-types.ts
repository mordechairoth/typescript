// Three common primitive types: string, number, and boolean.

let firstName: string = "Maya";
let age: number = 28;
let isStudent: boolean = true;

firstName = "Sam";
age = 29;
isStudent = false;

console.log(firstName, age, isStudent);

// Uncomment one at a time to see a type error:
// firstName = 42;
// age = "twenty-nine";
// isStudent = "yes";

// TypeScript can also infer a type from the initial value.
let city = "New York"; // Inferred as string.
// city = 123;
console.log(city);
