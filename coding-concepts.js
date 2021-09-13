// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.length)
 a) Your answer:11
b) Verify and explain:10 is the correct answer because the count starts at 1 not 0 ?


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

a) Your answer:l
b) Verify and explain:starting at 0 , 3 is l

// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

a) Your answer:Ruby
b) Verify and explain:starting at 0 , ruby is 1 of list


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

a) Your answer:upper case first letter of each word in ""
b) Verify and explain:ncaught TypeError: weekendDays.toUpperCase is not a function
    at <anonymous>:2:25

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

a) Your answer:29
b) Verify and explain:correct answer dataTypes.length returns number
