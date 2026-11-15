// Type the parameters and the return value.

function add(first: number, second: number): number {
  return first + second;
}

console.log(add(2, 3));
// add("2", "3"); // Error: the arguments must be numbers.
// add(2); // Error: the second argument is required.

// TypeScript can infer the return type (string here).
function greet(name: string) {
  return `Hello, ${name}!`;
}

console.log(greet("Maya"));

// void describes a function that does not return a useful value.
function printMessage(message: string): void {
  console.log(message);
}

printMessage("Welcome!");

// Arrow functions can have typed parameters and return values too.
const multiply = (first: number, second: number): number => first * second;
console.log(multiply(3, 4));

// A function type describes the functions a variable can hold.
type MathOperation = (first: number, second: number) => number;
const operation: MathOperation = add;
console.log(operation(10, 5));


