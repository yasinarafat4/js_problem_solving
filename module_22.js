// // প্রাকটিস প্রব্লেম

// // ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

// // ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

// // ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

// // ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

// // ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

// // ৬. // Write a function called foo() which prints "foo" and a function called bar() which prints "bar".

// function foo() {
//   console.log("foo");
// }
// foo();

// function bar() {
//   console.log("bar");
// }
// bar();

// // ৭. পরীক্ষায় ২ জনের মার্কস যথাক্রমে ৭০ এবং ৮০, এমন একটা code লিখো যে, যদি তাদের মার্কস এর ব্যাবধান ৫ হয় তাহলে তারা বন্ধু হবে নাহলে তারা বন্ধু হবে না।

// // const firstPersonsNumber = 80;
// // const secondPersonsNumber = 70;

// // const gap = firstPersonsNumber - secondPersonsNumber;

// if (gap < 5) {
//   console.log("you guys can be friends");
// } else {
//   console.log("you guys stay apart");
// }

// //But if the above number becomes smaller then it gives - value, then we have to use ,Math.abs, Like:

// const firstPersonsNumber = 60;
// const secondPersonsNumber = 70;

// const gap = Math.abs(firstPersonsNumber - secondPersonsNumber);

// if (gap < 5) {
//   console.log("you guys can be friends");
// } else {
//   console.log("you guys stay apart");
// }

// //Inside the module --------------------------------------------
// // Can you find out who will get the delicious cake?

// // Part-1

// //Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his clas. She was also a topper at her previous school. On the day of result publication, the teacher comes into class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get this tasty cake." Can you find out who will gety this cake?

// // Input:
// // The input line has two values, m (The marks Jim has got) and n (The marks Dela has got).

// // Output:
// // Print the name of the topper

// // Sample Input-1: 84 75
// // Sample Input-2: 69 97
// // Sample Output-1: Jim
// // Sample Output-2: Dela

// // Can you find out who will get the delicious cake?

// // Sample Input-1: 84 75
// // const jim = 84;
// // const dela = 75;

// // if (jim > dela) {
// //   console.log("Jim will get the cake");
// // } else {
// //   console.log("Dela will get the cake");
// // }

// // Sample Input-2: 69 97
// // const jim = 69;
// // const dela = 97;

// // if (jim > dela) {
// //   console.log("Jim will get the cake");
// // } else {
// //   console.log("Dela will get the cake");
// // }

// // Part-2-----------------------------

// // This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

// // Input:
// // The input line has three values, x (The marks Jim has got), y (The marks Dela has got), z (The marks Chinku has got).

// // Output:
// // Print the name of the topper

// // Sample Input-1: 84 99 77
// // Sample Input-2: 69 97 99
// // Sample Output-1: Dela
// // Sample Output-2: Chinku

// // Me
// // const jim = 84;
// // const dela = 99;
// // const chinku = 77;

// // if (jim > dela && jim > chinku) {
// //   console.log("Jim will get the cake");
// // } else if (dela > jim && dela > chinku) {
// //   console.log("Dela will get the cake");
// // } else {
// //   console.log("Chinku will get the cake");
// // }

// //Another way using function

// function topper(jim, dela, chinku) {
//   if (jim > dela && jim > chinku) {
//     console.log("Jim will get the cake");
//   } else if (dela > jim && dela > chinku) {
//     console.log("Dela will get the cake");
//   } else {
//     console.log("Chinku will get the cake");
//   }
// }
// topper(84, 99, 77);

// // PH

// // const maximum = Math.max(84, 99, 77);
// // console.log(maximum);

// // const minimum = Math.min(84, 99, 77);
// // console.log(minimum);

//-------------------------------------------------

// Who is the tallest?

// Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the height will be the winner. Can you find who is the tallest among Tom and all of his friends?

// Input:
// The input line can have multiple integer number, xi (The height of i friend in cm).

// Output:
//Print the height of the tallest friend(cm).

// Sample Input-1: 157 134 188
// Sample Input-2: 167 190 120 165 137
// Sample Output-1: 188
// Sample Output-2: 190

// function maxInArray(numbers) {
//   let largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }
// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log("tallest person is:", tallest);
//------------------------------
// Who is the smallest?

function minInArray(numbers) {
  let smaller = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element < smaller) {
      smaller = element;
    }
  }
  return smaller;
}
const heights = [167, 190, 120, 165, 137];
const smallest = minInArray(heights);
console.log("smallest person is:", smallest);
