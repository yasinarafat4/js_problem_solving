// ২. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড়
// ৩. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো

// ৪.এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?

// ৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো

// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

// ৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা

// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// ৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে

// 8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো
//-----------------------------------

// Basic Problems:

// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।-----------------------------------

/*
1 to n
1+2+3+.........+n
*/
let n = 10;

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
// console.log(sum);

//Another rules
let sum2 = (n * (n + 1)) / 2;
// console.log("Sum2:", sum2);

// solve
//----------------------------------------------------------------
// ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে। (TimesTable)

let num1 = 1;
let num2 = 3;

for (let i = 1; i <= 10; i++) {
  //   console.log(i + "*" + 3 + "=" + i * 3);
  //   console.log(i, "*", 3, "=", i * 3);
}
// solve
//----------------------------------------------------------------

// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

// আউটপুটঃ 3

// let num = 4;

// if (num < 5) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
function greaterThanFive(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 5) {
      count = count + 1;
      // Or, count += 1;
      //   count++;
    }
  }
  return count;
}
const results = greaterThanFive(numbers);
// console.log(results);
// solve
//----------------------------------------------------------------

// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।
/* 
Ratul
Jobaer
*/
// let nameOne = "Ratul";
// let nameTwo = "Jobaer";

// console.log(nameOne.length);
// console.log(nameTwo.length);

// let friendOneLength = nameOne.length;
// let friendTwoLength = nameTwo.length;

// if (friendOneLength > friendTwoLength) {
//   console.log(nameOne, "is largest");
// } else {
//   console.log(nameTwo, "is largest");
// }

// reverse part
// if (friendOneLength > friendTwoLength) {
//   console.log(nameOne.split("").reverse().join(""));
// } else {
//   console.log(nameTwo.split("").reverse().join(""));
// }

// final part----

// let nameOne = "Ratul";
// let nameTwo = "Jobaer";

// function reverseName(nameOne, nameTwo) {
//   let friendOneLength = nameOne.length;
//   let friendTwoLength = nameTwo.length;

//   if (friendOneLength > friendTwoLength) {
//     return nameOne.split("").reverse().join("");
//   } else {
//     return nameTwo.split("").reverse().join("");
//   }
// }

// const resultOfTwoNames = reverseName("Ratul", "Jobaer");
// console.log(resultOfTwoNames);
// solve

// Another way for reversing a string------------

// let str = "Jobaer";

// unreverse
// for (let i = 0; i < str.length; i++) {
//   const element = str[i];
//   console.log(element);
// }

// reverse

let nameOne = "Ratul";
let nameTwo = "Jobaer";

function reverseName(nameOne, nameTwo) {
  let friendOneLength = nameOne.length;
  let friendTwoLength = nameTwo.length;
  let largeName = "";
  if (friendOneLength > friendTwoLength) {
    largeName = nameOne;
  } else {
    largeName = nameTwo;
  }
  let reverseString = ""; /* empty string for sum reverseString + element */
  for (let i = largeName.length - 1; i >= 0; i--) {
    const element = largeName[i];
    reverseString = reverseString + element;
  }
  return reverseString;
}

let resultOfTwoNames = reverseName("Ratul", "Jobaer");
// console.log(resultOfTwoNames);

//----------------------------------------------------------------

// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।

// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
//          অব্জজেক্টটি/Input দেখতে এমনঃ

// [

//     {name:'sakib', age:30},

//     {name:'samiul', age:20},

//     {name:'sahid', age:50},

//     {name:'samin', age:10}

// ]

//----------------------------------------------------------------

// বেসিক জাভাস্ক্রিপ্ট এর সিম্পল Problems(এসাইন্মেন্ট কিভাবে করতে হবে তার ধারণা পাওয়া যাবে এগুলো সমাধান করলে)

// ফাংশনের নাম হুবহু আমি যেমন বলে দিয়েছি সেটার মতো করে হতে হবে। অন্য কোন নাম/ অথবা নামের কোণ অক্ষর ছোট , কোণ অক্ষর বড় করলে হবে না , হুবহু আমার মত দিতে হবে ।

// Problem:1   radianToDegree

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

// Sample Data:

// Input

// 10, 25, 199

// Output

// 572.96, 1432.39, 11401.86

//formula : 1rad x 180/π
function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "Mr. Yasin provide a valid input";
  }
  const PI = 3.14159265;
  const degree = (radian * (180 / PI)).toFixed(2);
  return degree;
  // return parseFloat(degree); [if want to make it string to number]
}

let result = radianToDegree(25);
console.log(result);
//solve

//----------------------------------------------------------------

// Problem:2   isJavaScriptFile

// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।

// Sample Data

// Input
/* 
'app.js'
'js.png'
'image.js.png'
'image.jpg.js'
*/

// Output
/*
 true
 false
 false
 true
 */

function isJavaScriptFile(fileName) {
  if (typeof fileName != "string" || fileName.length == 0) {
    return "Mr. Yasin provide a valid input";
  }
  if (fileName.endsWith(".js")) {
    /* .endsWith() method checkes whether a string ends with the characters of a specified string */
    return true;
  } else {
    return false;
  }
}

let resultIs = isJavaScriptFile("index.js");
// console.log(resultIs);

/* Another way is nasted conditions
 */
function isJavaScriptFile(fileName) {
  let str = fileName;
  if (str[str.length - 1] == "s") {
    if (str[str.length - 2] == "j") {
      if (str[str.length - 3] == ".") {
        return true;
      }
    }
  }
  return false;
}
// let resultIs = isJavaScriptFile("index.js");
// console.log(resultIs);

/* Most easy and shortcut way is
 */
function isJavaScriptFile(fileName) {
  return fileName.endsWith(".js");
}
// let resultIs = isJavaScriptFile("index.js");
// console.log(resultIs);

//solve
//----------------------------------------------------------------

// Problem 3:  oilPrice

// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।

// .

// Sample Data

// Input

// 1, 1, 1

// 30, 20, 10

// 1,0,2

// 0,2,3

// Output

// 379

// 7370

// 384

// 665

//----------------------------------------------------------------

// Problem 4:  publicBusFare

// একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।

// উদাহরণ১ঃ

//  যদি ১১৭ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

// উদাহরণ২ঃ

//  যদি ২৩৫ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

// Sample Data

/* Input
 50
 55
 112
 235
 365
 */

/* Output
 0
 1250
 250
 500
 1000
*/

function publicBusFare(participants) {
  if (typeof participants != "number") {
    return "Provide valid participants in number";
  }
  let busSeatCapacity = 50;
  let microbusSeatCapacity = 11;
  let remaining = 0;

  // After calculating the amount of people who can travel by our bus
  // The value of remaining will be:-
  remaining = participants % busSeatCapacity;

  // After calculating the amount of people who can travel by our microbus
  // The value of remaining will be:-
  remaining = remaining % microbusSeatCapacity;

  // Now calculate the total cost of public bus
  let costOfPublicBus = remaining * 250;
  return costOfPublicBus;
}
console.log(publicBusFare(365));

//----------------------------------------------------------------

// Problem 5:  isBestFriend

// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

// Sample Data:

// Input
/* 
{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }

{ name: "abul", friend: "kabul" },
{ name: "kabul", friend: "sabul" }

{ name: "doe", friend: "alex" },
{ name: "john", friend: "doe" }
*/

// Output
/*
 true

 false

 false
 */

function isBestFriend(objectOne, objectTwo) {
  if (
    objectOne.name == objectTwo.friend &&
    objectTwo.name == objectOne.friend
  ) {
    return true;
  } else {
    return false;
  }
}
let resultOfTheObjects = isBestFriend(
  { name: "abul", friend: "babul" },
  { name: "babul", friend: "abul" }
);
// console.log(resultOfTheObjects);

//----------------------------------------------------------------
// কিছু কমন প্রশ্ন:

// প্রশ্ন-১: ফ্যাংশন এর ভিতরে কি console.log লিখবো নাকি রিটার্ন করবো?

// উত্তর: তুমি চাইলে তোমার নিজের জন্য বা বুঝার জন্য console.log লিখতে পারো। সেটা অপশনাল। তবে ফাংশনের রেজাল্ট অবশ্যই রিটার্ন করতে হবে। সেটা console.log করলে কাজ হবে না।

// .

// প্রশ্ন-২: সবসময় কি সংখ্যা বা স্ট্রিং রিটার্ন করবো।

// উত্তর: সব প্যারামিটার ঠিক থাকলে সঠিক সংখ্যা বা সঠিক ভ্যালু  রিটার্ন করবে। যদি এক বা একাধিক ইনপুট খারাপ থাকে তাহলে কোন error স্ট্রিং হিসেবে রিটার্ন করে দিবে।

// যদি সংখ্যা রিটার্ন করার কথা সেখানে সংখ্যা রিটার্ন করবে। যদি বুলিয়ান ভ রিটার্ন করার কথা সেখানে true/false  রিটার্ন করবে।

// অর্থাৎ টোটাল খরচ কত হবে সেখানে জাস্ট সংখ্যা রিটার্ন করবে। সেখানে জোর করে সংখ্যাকে স্ট্রিং এ কনভার্ট করে। বা your total cost is 200 taka এমন করা যাবে না। জাস্ট 200 রিটার্ন করে দিবে।

// .

// প্রশ্ন-৩: ফাংশনের বাইরে কি console.log করতে হবে?

// উত্তর: ফাংশনের বাইরে console.log লেখা বা না লেখা অপশনাল। তুমি চাইলে তোমার কোড চেক করার জন্য। বা যে রেজাল্ট দেয়ার কথা সেটা ঠিক মতো দিচ্ছে কিনা সেটা ভেরিফাই করার জন্য ওই ফাংশনকে কল করে তার রিটার্ন যে ভ্যালু আছে সেটা console.log করে চেক করতে পারো। তবে আমাদের এসাইনমেন্ট এর জন্য এইটা করা জরুরি না। আমরা শুধু মেইন ফাংশনটা নিয়ে সেটাকে চালিয়ে দেখবো ঠিকমতো কাজ করছে কিনা।

// .

// প্রশ্ন-৪:  var ব্যবহার করা যাবে?

// উত্তর: না। let/const ব্যবহার কর।

// .

// প্রশ্ন-৫: ইউজারের কাছ থেকে কোন ইনপুট নিতে হবে? [ IMPORTANT ]

// উত্তর: এসাইনমেন্ট এর জন্য ইউজারের কাছ থেকে কোন ইনপুট নেয়া লাগবে না। জাস্ট ফাংশন লিখলেই হবে। আমরা তোমার কোড নিয়ে সেটার ফাংশনকে কল করবো।

// তুমি চেক করার সময় ইনপুট প্যারামিটার দিয়ে চেক করতে পারো। তারপর চেক করা শেষ হলে সেই কোড অবশ্যই  কমেন্ট করে ফেলতে হবে অথবা মুছেই ফেলতে পার।আমরা শুধু ফাংশনের ভিতরে ঠিক আছে কিনা দেখব । তাই সাবমিট কড়ার সময় তোমাদের console.log গুলো অবশ্যই মুছে ফেলবা।

// ফাংশনকে আমরা বিভিন্ন সংখ্যা -- ভালো এবং খারাপ সংখ্যায় দিয়ে কল করবো। তখন যদি ঠিক রেজাল্ট দেয় তাহলেই হবে।  তোমাদের সুবিধার্থে নিচে একটি ডেমো দেওয়া হলঃ

// WRONG FORMAT

// -problem 1

// function makeDouble(number){

//   // do not write anything like this, just return the result

//   return "Problem one result: " + number* 2;

// }

// const result = makeDouble(5);

// // remove any console.log() or function call like this form here👆

// CORRECT FORMAT

// function makeDouble(number) {

//   return number * 2;

// }
