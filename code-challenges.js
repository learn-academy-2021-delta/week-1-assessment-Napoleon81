// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
if temperature equal 212 temperature equals boiling point. if temperature is less then 212 temperature is below boiling point. if temperature is greater then 212, temperature is above boiling point
// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
var boilingPoint= 212
var temp = 35
var temp = 350
var temp = 212
if(temp < boilingPoint) {
  console.log("35 is below boiling point");
}
else if(temp > boilingPoint) {
  console.log("350 is above boiling point");
}
else if (true) {
}(temp === boilingPoint) {
console.log("212 is at boiling point");
// // --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10
// //concat two variables and call length
var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
const myNumbers3 = myNumbers1.concat(myNumbers2);
console.log(myNumbers3.length);
// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"
var myString1 = "charlie"
var myString2 = "delta"
myStringReversed = myString1.split('').reverse().join('');
myStringReversed2 = myString2.split('').reverse().join('');
console.log(myStringReversed);
console.log(myStringReversed2);
// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12
var number1 = 42
var number2 = 27
if(number1 < number2)
{number2-number1
}
else {number1-number2
}
var number1 = 7
var number2 = 19
if(number1 < number2)
{number2-number1}
else {number1-number2}
// // --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3
var numberRefactor1 = 42
var numberRefactor2 = "hello"
if(typeof(numberRefactor1) || typeof(numberRefactor2) == "numbers") {
console.log("hello, your variable is not a number");
}

var numberRefactor1 = 27
var numberRefactor2 = 24
if(typeof(numberRefactor1) || typeof(numberRefactor2) == "numbers") {
console.log("hello, your variable is not a number");
// }
