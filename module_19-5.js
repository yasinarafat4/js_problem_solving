//Problem 1- একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও

// for (var i = 58; i <= 98; i++) {
//   console.log(i);
// }

// var num = 58;
// while (num <= 98) {
//   console.log(num);
//   num += 1;
// }
// solved

//Problem 2- একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও

// var even = 412;
// while (even <= 456) {
//   console.log(even);
//   even += 2;
// }
// solved

//Problem 3- একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও

// var odd = 581;
// while (odd <= 623) {
//   console.log(odd);
//   odd += 2;
// }
// solved

//Problem 4- তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

// var iHaveLearned = ["html", "css", "bootstrap", "tailwind"];
// for (var i = 0; i <= 3; i += 1) {
//   var learned = iHaveLearned[i];
//   console.log("iHaveLearned:", learned);
// }
// solved

//Problem 5- তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও

// var usedPhone = ["symphony", "itel", "kingstar", "redmi"];

// var phone = 0;
// while (phone <= 1) {
//   var phone = usedPhone[phone];
//   console.log("usedPhone:", phone);
//   phone += 1;
// }

// var usedPhone = 0;
// while (usedPhone < 1) {
//   usedPhone += 1;
//   console.log("Symphony");
//   console.log("Itel");
//   console.log("Nokia");
//   console.log("Kingstar");
//   console.log("Redmi");
// }

//Problem 6- একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

// for (var i = 30; i <= 86; i++) {
//   if (i > 44) {
//     break;
//   }
//   console.log(i);
// }

//Problem 7- তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

// var booksPrice = [130, 230, 100, 200, 199, 150, 210, 300];
// var lowBooksPrice = 0;

// for (var i = 0; i < booksPrice.length; i++) {
//   if (booksPrice[i] > 200) continue;
//   lowBooksPrice = booksPrice[i];
//   console.log(lowBooksPrice);
// }

// #1. Remove math from the following array.
var books = ["Bengali", "English", "Math", "Economics", "Social", "Religious"];
var lowBooksPrice = 0;

for (var i = 0; i < books.length; i++) {
  if (books[i] == "Math") continue;
  lowBooksPrice = books[i];
  console.log(lowBooksPrice);
}

// #2. Break Economics
var books = ["Bengali", "English", "Math", "Economics", "Social", "Religious"];
var lowBooksPrice = 0;

for (var i = 0; i < books.length; i++) {
  if (books[i] == "Economics") break;
  lowBooksPrice = books[i];
  console.log(lowBooksPrice);
}
