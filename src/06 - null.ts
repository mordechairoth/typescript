// null represents an intentionally absent value.

const emptyValue: null = null;
console.log(emptyValue);

// With strict null checking, a string cannot contain null.
let firstName: string = "Maya";
// firstName = null; // Type error with strictNullChecks enabled.
console.log(firstName);

// Use | null when a value may be missing.
// The | syntax is a union type, covered in the previous file.
function greet(name: string | null): string {
  if (name === null) {
    return "Hello, guest!";
  }

  // After the null check, TypeScript knows name is a string.
  return `Hello, ${name.toUpperCase()}!`;
}

console.log(greet(null));
console.log(greet("Maya"));
