function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (isNaN(numB)) {
      throw new Error("Invalid input: b must be a number or a parsable string");
    }
    return a + numB;
  } else {
    return a + b;
  }
}

let result1 = addSafe(1, "2"); // No Error, parsed as Number
let result2 = addSafe(1, 2); // No Error
let result3 = addSafe(1, "abc"); // throws an error