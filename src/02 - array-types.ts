// An array type describes the type of its elements.

const names: string[] = ["Maya", "Sam"];
const scores: number[] = [85, 92, 100];
const answers: boolean[] = [true, false, true];

names.push("Alex");
scores.push(95);
answers.push(false);

// names.push(42); // Error: a number does not belong in a string array.
// scores.push("95"); // Error: "95" is a string.

// Array<string> is another way to write string[].
const cities: Array<string> = ["London", "Paris"];

for (const name of names) {
  console.log(name.toUpperCase());
}

console.log(scores, answers, cities);
