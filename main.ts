// Assalamualaikum @everyone 👋

// 🚀 Day 30 Challenge: Start Coding! 🚀

// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function roundToNearestInteger(num: number): number {
  return Math.round(num);
}
console.log(roundToNearestInteger(8.78));
console.log(roundToNearestInteger(11.56));
console.log(`\n`);

// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function convertStrToNum(str: string): number {
  return parseFloat(str);
}
console.log(convertStrToNum("99.99"));
console.log(convertStrToNum("798.82"));
console.log(`\n`);

// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function isValueNaN(value: any): boolean {
  return isNaN(value);
}
console.log(isValueNaN("Hello World"));
console.log(isValueNaN(890));
