// const stringReversed = (str) => {

//   let reverse = "";

//   for (let i = str.length - 1; i >= 0; i--) {

//     reverse = reverse + str[i];

//     // console.log(reverse);

//   }

//   return reverse;

// };

// console.log(stringReversed("bhumika"));

const getStringReversed = (str) => {

return str.split("").reverse().join("");

};

console.log(getStringReversed("bhumika"));

//Note: methods are for arrays are

// map, filter, reduce

// split, join, reverse
