// problem-1

// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

// solved by me
var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[1] = 'Mango';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);

// solved by PH
var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);
// problem-2--------------------------------------------------------

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is

// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.


var Me = 85;
var Tom = 66;
var Jane = 95;
var Peter = 56;
var John = 40;

// Me
if(Me >= 80){
    console.log('My grade is A');
}
else if(Me >= 60){
    console.log('My grade is B');
}
else if(Me >= 50){
    console.log('My grade is C');
}
else if(Me >= 40){
    console.log('My grade is D');
}
else {
    console.log('My grade is F');
}


// Tom
if(Tom >= 80){
    console.log('Tom’s grade is A');
}
else if(Tom >= 60){
    console.log('Tom’s grade is B');
}
else if(Tom >= 50){
    console.log('Tom’s grade is C');
}
else if(Tom >= 40){
    console.log('Tom’s grade is D');
}
else {
    console.log('Tom’s grade is F');
}


//Jane
if(Jane >= 80){
    console.log('Jane’s grade is A');
}
else if(Jane >= 60){
    console.log('Jane’s grade is B');
}
else if(Jane >= 50){
    console.log('Jane’s grade is C');
}
else if(Jane >= 40){
    console.log('Jane’s grade is D');
}
else {
    console.log('Jane’s grade is F');
}


//Peter
if(Peter >= 80){
    console.log('Peter’s grade is A');
}
else if(Peter >= 60){
    console.log('Peter’s grade is B');
}
else if(Peter >= 50){
    console.log('Peter’s grade is C');
}
else if(Peter >= 40){
    console.log('Peter’s grade is D');
}
else {
    console.log('Peter’s grade is F');
}


// John
if(John >= 80){
    console.log('John’s grade is A');
}
else if(John >= 60){
    console.log('John’s grade is B');
}
else if(John >= 50){
    console.log('John’s grade is C');
}
else if(John >= 40){
    console.log('John’s grade is D');
}
else {
    console.log('John’s grade is F');
}

// solved

// problem-3--------------------------------------------------------


// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

// solved by me
var numberOne = 13;
var numberTwo = 79;
var numberThree = 45;

if(numberOne > numberTwo){
    console.log('numberOne = 13');
}
else if(numberOne > numberThree){
    console.log('numberOne = 13');
}
else if(numberTwo > numberOne){
    console.log('numberTwo = 79');
}
else if(numberTwo > numberThree){
    console.log('numberTwo = 79');
}
else if(numberThree > numberOne){
    console.log('numberThree = 45');
}
else if(numberThree > numberTwo){
    console.log('numberThree = 45');
}

// solved by PH
var num1 = 13;
var num2  = 79;
var num3 = 45;

if (num1 > num2){
    if (num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if (num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal

//solved by me
var firstSide = 9;
var secondSide = 8;
var thirdSide = 9;

if(firstSide == secondSide){
    console.log('first and second sides are equal');
}
else if(firstSide == thirdSide){
    console.log('first and third sides are equal');
}
else if(secondSide == thirdSide){
    console.log('second and third sides are equal');
}

// -------------------------------------------------
//solved by PH
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3){
 console.log('isosceles.');
}
else{
    console.log('not isosceles');
}





// problem-4--------------------------------------------------------

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 


var signal = 'red';
var signal = 'yellow';
var signal = 'green';

if (signal){
    console.log('Danger');
}
else if(signal){
    console.log('Stop');
}
else {
    console.log('You can go');
}

