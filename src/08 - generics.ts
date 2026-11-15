// Generics let us reuse code while preserving specific types.
// A type parameter is a placeholder for a type supplied for each use.

// Object types can have type parameters.
type Box<T> = {
  value: T;
};

const textBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 28 };
// numberBox.value = "hello"; // Error: this box holds numbers.

