// Write an ES6 function which takes an array of digits and return the sum of all digits present at odd indices. Avoid using in-built methods.

// const sumOfOddIndices = (arr) =>{
//     let sum =0;
//     for(let i=0;i<arr.length;i++){
//         if(i%2!==0){
//             sum = sum + arr[i]
//         }
//     }
//     return sum
// }
// console.log(sumOfOddIndices([1,2,3,4]))


const shortesString = (arr) => {
  let shortStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortStr.length) {
      console.log(shortStr);
      shortStr = arr[i];
    }
  }
  return shortStr;
};
