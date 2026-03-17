// - Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

//     `*// Your ES6 code here*console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])) *// [2, 4, 6, 9]*`
// ------------------complex solution-------------------
// const getSumOfArray = (arr1, arr2) =>{
//     const sumArr = [];
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0;i<arr2.length;j++){

//             if(j>i) break;
//             if(i===j)
//             sumArr.push(arr1[i]+arr2[j])

//         }
//     }
//     return sumArr;
// }

//-----------------simpler solution---------------
const getSumOfArray = (arr1, arr2) => {
  const sumArr = [];
  for (let i = 0; i < arr1.length; i++) {
    sumArr.push(arr1[i] + arr2[i]);
  }
  return sumArr;
};
console.log(getSumOfArray([1, 2, 3, 4], [1, 2, 3, 5]));
