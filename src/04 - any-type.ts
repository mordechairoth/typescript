// any turns off type checking for a value.

let value: any = "hello";
console.log(value.toUpperCase());

value = 28;
console.log(value);

value = { firstName: "Maya" };
console.log(value.firstName);

// TypeScript allows this because value is any, but running it would crash:
// value.toUpperCase(); // The current object has no toUpperCase method.

// A specific type catches mistakes before the code runs.
let message: string = "hello";
// message = 28; // Type error.
console.log(message.toUpperCase());
