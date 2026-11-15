// Generics let us reuse code while preserving specific types.
// A type parameter is a placeholder for a type supplied for each use.

// Functions can have type parameters too.
// T connects the parameter type to the return type.
function identity<T>(value: T): T {
  return value;
}

// We can supply the type explicitly.
const text = identity<string>("hello"); // string
const number = identity<number>(28); // number

// TypeScript can also infer T from the argument.
const isReady = identity(true); // boolean
const user = identity({ name: "Alex" }); // { name: string }
// identity<number>("hello"); // Error: the argument must be a number.

// A generic function can also use T inside another type.
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const names = wrapInArray("Alex"); // string[]
const scores = wrapInArray(100); // number[]

// Array<T> is the generic form of T[]. Both mean the same thing.
const fruits: Array<string> = ["apple", "banana"];
const prices: number[] = [10, 20]; // Same as Array<number>.
// fruits.push(42); // Error: this array holds strings.

// The array's element type determines the function's return type.
// An empty array has no first element, so the return type includes undefined.
function first<T>(items: Array<T>): T | undefined {
  return items[0];
}

const firstFruit = first(fruits); // string | undefined
const firstPrice = first(prices); // number | undefined
const emptyResult = first<string>([]); // undefined at runtime

// Generic constraints: extends requires T to have a particular shape.
// Without this constraint, TypeScript cannot know that value has a length.
function logLength<T extends { length: number }>(value: T): T {
  console.log(value.length);
  return value;
}

// The function accepts different types with length and preserves their types.
const message = logLength("hello"); // Still a string.
const loggedFruits = logLength(fruits); // Still Array<string>.
const namedValue = logLength({ length: 3, name: "example" });
namedValue.name.toUpperCase(); // The extra name property is preserved.
// logLength(42); // Error: numbers do not have a length property.

// Object types can have type parameters.
type Box<T> = {
  value: T;
};

const textBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 28 };
// numberBox.value = "hello"; // Error: this box holds numbers.

