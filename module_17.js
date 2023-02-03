//problem-1

// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
// help Harry calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka Harry's mom gave him.
// The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Practice Problem 1

// Sample Input:
// 1000
// 700

// Output:
// 300

// solved by me
var momGave = 1000;
var applesPrice = 400;
var orangesPrice = 300;
var sum = 400 + 300;

console.log(sum);

var back = 1000 - 700;
console.log(back);

// solved by PH

var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var getBack = moneyGiven - totalPrice;
console.log(getBack)

//problem-2--------------------------------------------------------


// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.


// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Practice Problem 2

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Output:
// 71.04

// solved by me
var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var sumAll = 75.25 + 65 + 80 + 35.45 + 99.50;
console.log(sumAll);

var division = 355.2 / 5;
division = division.toFixed(2);
division = parseFloat(division);
console.log(division);

// solved by PH
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);

var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
var averageTwoDecimal = parseFloat(averageTwoDecimal);
console.log(averageTwoDecimal);


// problem-3--------------------------------------------------------


// John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.

// Input:
// The first and the second lines of the input contain the strings.

// Output:
// Print the result in one line.

// Practice Problem 3

// Sample Input:
// I am going to be
// an awesome web developer

// Output:
// I am going to be an awesome web developer

var inputOne = 'I am going to be';
var inputTwo = 'an awesome web developer';
var sumOt = ('I am going to be' +' '+ 'an awesome web developer');

console.log(sumOt)
// solved


// problem-4--------------------------------------------------------


// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Practice Problem 4

// Sample Input:
// 119

// Output:
// 4

// solved by me
var dividedTo = 119;
var dividedBy = 5;
var remainder = 119 % 5;

console.log(remainder);

// solved by PH
var number = 119;
var remainder = number % 5;
console.log(remainder);
