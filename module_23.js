//  ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

//  ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

// Inside the module--------------------------------------------

// p-1
/*
1. Show output from: 1-50
2. if the number is divisible by 3 then instead of the number, show 'foo'
3. if the number is divisible by 5 then instead of the number, show 'bar'
4. if the number is divisible by both 3 and 5 then instead of the number, show 'foobar'
*/

/* Show output from: 1-50
 for (let i = 1; i <= 50; i++) {
   console.log(i);
 }
 */
/*
conditions-1

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("foo");
  } else {
    console.log(i);
  }
}


// conditions-2
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}

// conditions-3
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else {
    console.log(i);
  }
}

*/
// Or shortcut way--------------

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else {
    console.log(i);
  }
}

// p-2----------------------------------
