# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript that occurs when attempting to perform an operation (in this case, addition) on incompatible types (a number and a string).

## Bug
The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call it with a number and a string, resulting in a type error.

## Solution
The solution involves either explicitly checking the types of the inputs or using a type assertion to tell the compiler to treat the string as a number.  Note that type assertion does not perform runtime type checking; it's just a compiler directive. 