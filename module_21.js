// প্রাকটিস চ্যালেঞ্জ-৩ টা:

// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function isLeapYear(year) {
  if (year % 4) {
    console.log("Yesssss! This year is a Leap Year");
  } else {
    console.log("Noooo! This year is not a Leap Year");
  }
}
isLeapYear(1952);

// Another systems

// system one
function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    console.log("Yessss!", year, "is a Leap Year");
  } else {
    console.log("Noooo!", year, "is not a Leap Year");
  }
}
isLeapYear(1952);

// system two
function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}
const yesLeapYear = isLeapYear(1950);
console.log("Leap Year:", yesLeapYear);
const notLeapYear = isLeapYear(1948);
console.log("Leap Year:", notLeapYear);

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function isEven(number) {
  const reminder = number % 2;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNumber = isEven(44);
console.log("myNumberIs:", myNumber);
const herNumber = isEven(45);
console.log("herNumberIs:", herNumber);

// Write a function findOddSum() that will take the array [5, 8, 9, 18, 45, 33] as the input parameter and will return the sum of the odd numbers.

function getSumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum += element;
    console.log(index, element, sum);
  }
  return sum;
}

function findOddNumbers(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 1) {
      // element % 2 !== 0
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumbers = [5, 8, 9, 18, 45, 33];
const oddNumbers = findOddNumbers(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getSumNumbers(oddNumbers);
console.log("odd numbers sum:", oddNumbersSum);

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
