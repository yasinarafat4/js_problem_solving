//  ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

//  ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

// Inside the module--------------------------------------------

// P-1
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
/*
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

// P-2: Use add and multiplication to calculate wood requirements

/*
fixed: per wood required

1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity

*/

function woodRequired(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}
const totalQuantity = woodRequired(2, 2, 5);
console.log("Total wood required", totalQuantity);

// P-3: Find the cheapest phone from an array of phone objects

const phones = [
  {
    name: "Samsung",
    camera: 29,
    storage: "32gb",
    price: 96000,
    color: "blue",
  },
  {
    name: "iPhone",
    camera: 44,
    storage: "32gb",
    price: 136000,
    color: "blue",
  },
  {
    name: "Symphony",
    camera: 22,
    storage: "32gb",
    price: 26000,
    color: "blue",
  },
  {
    name: "Xiaomi",
    camera: 12,
    storage: "32gb",
    price: 66000,
    color: "blue",
  },
  {
    name: "Nokia",
    camera: 9,
    storage: "32gb",
    price: 16000,
    color: "blue",
  },
  {
    name: "OnePlus",
    camera: 32,
    storage: "32gb",
    price: 86000,
    color: "blue",
  },
  {
    name: "Oppo",
    camera: 14,
    storage: "32gb",
    price: 36000,
    color: "blue",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    /* compare */
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}
const myFinalSelection = cheapestPhone(phones);
// console.log("Cheapest Phone:", myFinalSelection);

// Find highest camera of the phones
function highestCamera(phones) {
  let highest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const camera = phones[i];
    if (camera.camera > highest.camera) {
      highest = camera;
    }
  }
  return highest;
}
const finalSelection = highestCamera(phones);
console.log("Highest Camera:", finalSelection);

//P-4: Calculate the total cost of the products in a shopping cart

const shoppingCart = [
  { name: "shoe", price: 3000 },
  { name: "shirt", price: 500 },
  { name: "pant", price: 700 },
  { name: "belt", price: 200 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
}
const expense = totalCost(shoppingCart);
console.log("My total expense:", expense);
