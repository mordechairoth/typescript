// A union allows a value to have one of several types.

let id: string | number = 123;
console.log(id);

id = "user-123";
console.log(id);
// id = true; // Error: boolean is not one of the allowed types.

function formatId(value: string | number): string {
  // Narrow the union before using a method specific to one type.
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  // Here TypeScript knows value is a number.
  return value.toFixed(0);
}

console.log(formatId("user-123"));
console.log(formatId(123));

// A union can also restrict a value to specific literal values.
type Status = "pending" | "approved" | "rejected";
let status: Status = "pending";
status = "approved";
// status = "finished"; // Error: not an allowed status.
console.log(status);
