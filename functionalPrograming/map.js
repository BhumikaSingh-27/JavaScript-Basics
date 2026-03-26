// 1. Write an ES6 function that takes in an array of objects representing sounds and returns an array of sounds name with all the letters capitalized.

// `*// Your ES6+ code here*const sounds = [  {    name: 'rain',    sound: 'tap tap tap',  },  {    name: 'fire',    sound: 'blaze',  },  {    name: 'water',    sound: 'slosh slosh',  },]console.log(capitalizeLetters(sounds)) *// Output: ["RAIN", "FIRE", "WATER"]*`

// const sounds = [  {    name: 'rain',    sound: 'tap tap tap',  },  {    name: 'fire',    sound: 'blaze',  },  {    name: 'water',    sound: 'slosh slosh',  }];

// const capitalizedNames = (sound) => {
//     return sound.map(({name}) => name[0].toUpperCase()+name.slice(1)) //use slice when we need to extract few letters from a string
// }

// console.log(capitalizedNames(sounds))

//==============================================================2=================================

// 2. Write an ES6 function that takes an array of objects with name, price and quantity, and returns a new array with only the names containing **`bread`**

// `*// Your ES6+ code here*const products = [  { name: 'Bread', price: 480, quantity: 3 },  { name: 'Clips', price: 200, quantity: 5 },  { name: 'green Bread Knife', price: 3077, quantity: 1 },  { name: 'Slipper', price: 150, quantity: 2 },]console.log(filterByKeyword(products))*// Output: ["Bread", "green Bread Knife"]*`

// const products = [
//   { name: "Bread", price: 480, quantity: 3 },
//   { name: "Clips", price: 200, quantity: 5 },
//   { name: "green Bread Knife", price: 3077, quantity: 1 },
//   { name: "Slipper", price: 150, quantity: 2 },
// ];

// const filterNames = (products) => {
//   return products.filter(({ name }) => name.toLowerCase().includes("bread")).map(({name})=>name);

// };
// console.log(filterNames(products));
//==============================================================3=============
// 3. Write an ES6 function that takes an array of objects with name, price and quantity, and returns the new array having only names of products who are having a quantity of more than 10 and a name of more than 5 characters in length.

//     `*// Your ES6+ code here*const products = [  { name: 'Bread', price: 150, quantity: 20 },  { name: 'Hoodie', price: 200, quantity: 50 },  { name: 'Pyjama', price: 307, quantity: 10 },  { name: 'Slipper', price: 480, quantity: 30 },]console.log(filterProducts(products)) *// Output: ["Hoodie", "Slipper"]*`

// const products = [
//   { name: "Bread", price: 150, quantity: 20 },
//   { name: "Hoodie", price: 200, quantity: 50 },
//   { name: "Pyjama", price: 307, quantity: 10 },
//   { name: "Slipper", price: 480, quantity: 30 },
// ];

// const filterProducts = (products) => {
//   return products
//     .filter(({ name, quantity }) => name.length >= 5 && quantity > 10)
//     .map(({ name }) => name);
// };
// console.log(filterProducts(products));

//================================================4==================================
// 4. Write an ES6 function that takes an array of objects with name, salary and role, and returns a new array with names whose salary is an even number.

//     `*// your ES6+ code here*const employees = [  { name: 'Raju', salary: 154, role: 'dev' },  { name: 'Aakash', salary: 200, role: 'dev' },  { name: 'Ramesh', salary: 3077, role: 'pm' },  { name: 'Jiten', salary: 487, role: 'qa' },]console.log(filterBySalary(employees)) *// Output: ["Raju", "Aakash"]*`

// const employees = [
//   { name: "Raju", salary: 154, role: "dev" },
//   { name: "Aakash", salary: 200, role: "dev" },
//   { name: "Ramesh", salary: 3077, role: "pm" },
//   { name: "Jiten", salary: 487, role: "qa" },
// ];

// const filterBySalary = (users) => {
//   return users.filter(({ salary }) => salary % 2 === 0).map(({ name }) => name);
// };

// console.log(filterBySalary(employees));
//===========================================================================================

