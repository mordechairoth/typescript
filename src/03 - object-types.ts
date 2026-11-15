// An object type describes its property names and their types.

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Maya",
  lastName: "Cohen",
  age: 28,
};

person.age = 29;
console.log(`${person.firstName} ${person.lastName}`, person.age);

// person.age = "29"; // Error: age must be a number.
// person.email = "maya@example.com"; // Error: email is not in this type.

// Give an object type a name so it can be reused.
type Person = {
  firstName: string;
  lastName: string;
  nickname?: string; // The question mark makes this property optional.
};

const sam: Person = { firstName: "Sam", lastName: "Lee" };
const alex: Person = {
  firstName: "Alex",
  lastName: "Smith",
  nickname: "Al",
};

// const incomplete: Person = { firstName: "Sam" }; // Missing lastName.
console.log(sam, alex);
