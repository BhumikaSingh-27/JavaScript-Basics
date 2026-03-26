// 5. Write an ES6 function that takes in an array of numbers and returns the sum of all the even numbers. Use the nullish coalescing operator to handle undefined or null values.

//     `*// Your ES6+ code here*console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])) *// 12*console.log(sumOfEvenNumbers([1, 3, 5])) *// 0*`

// const sumOfEvenNumbers = (array) =>{
// return ( array ?? []).reduce(((acc,cur)=> cur%2===0?acc+cur:acc),0)
// }

// console.log(sumOfEvenNumbers([1, 3, 5]))

// return (array ?? []).reduce((acc,cur)=>{
//     acc=acc+cur;
//     return acc
// },0)
// }
// console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]))

//--------------------2------------------
// Multiply all numbers

// const multiplyAll = (arr) => {
//   return arr.reduce((mul, cur) => mul * cur, 1 );
// };
// console.log(multiplyAll([1, 2, 3, 4]));

//==============================3=============

// const findMaxNumber = (arr) =>{
//     return arr.reduce((max,cur)=>max>cur?max:cur,1)
// }
// console.log(findMaxNumber([3, 7, 9,2]))

//===========================4=====================

//minimum number
// const  findMinimum = (arr) =>{
//     return arr.reduce((min,cur)=> min<cur?min:cur,1)
// }
// console.log(findMinimum([2,1,4,5]))

///===============count total elements==================

// const arr = ["a", "b", "c"];

// const countElement = (arr) => {
//   return arr.reduce((total, cur) => (cur ? total + 1 : total), 0);
// };
// console.log(countElement(arr));

///===================INTERMIDIATE LEVEL==========
//*****************SUM OF EVEN NUMBERS ******
// const num =[1, 2, 3, 4, 6];
// // → 12
// const sumOfEvenNumbers=(arr)=>{
//     return arr.reduce((sum,cur)=>cur%2===0?sum+cur:sum,0)
// }
// console.log(sumOfEvenNumbers(num))

//==============7. Flatten an array (1 level)==========
// const nestedArr = [[1, 2], [3, 4]];
// //  → [1, 2, 3, 4]
// const flattenedArray = (arr) =>{
//     return arr.reduce((flatArr,cur)=>  [...flatArr,...cur] ,[])
// }

// console.log(flattenedArray(nestedArr));

//==============count occurences================
// const aplhaArray = ["a", "b", "a", "c", "b", "a"];
// → { a: 3, b: 2, c: 1 }

// const countOccurence = (arr) =>{
//with for loop
//    const obj={};
//    for(let l of arr){
//     if(Object.keys(obj).includes(l)){
//         obj[l]=obj[l]+1;
//     }else{
//         obj[l]=1
//     }
//    }
//    return obj
// }
//with reduce
// return arr.reduce((obj,cur)=>{
// if(Object.keys(obj).includes(cur)){
//     obj[cur]=obj[cur]+1
// }else{
//     obj[cur]=1
// }
// return obj
// },{})

//best version of the solution which is clean and optimal o(1)
// return arr.reduce((obj,cur)=>{
//     obj[cur]=(obj[cur]||0)+1;
//     return obj},{})
// }

// console.log(countOccurence(aplhaArray))
//==========================REMOVE DUPLICATE=============
// const arr =[1, 2, 2, 3, 4, 4]
// → [1, 2, 3, 4]

// const removeDup =(arr)=>{
//     const a=[];
//     for(let i of arr){
//         if(a.includes(i)) continue;
//         else{
//             a.push(i)
//         }
//     }
//     return a
// }
//using reduce
// const removeDup = (arr) =>{
//     return arr.reduce((uniArr,cur)=>uniArr.includes(cur)? uniArr : [...uniArr,cur],[])
// }
// console.log(removeDup(arr))
//============================### 13. Longest word

const greetings = ["hi", "hello", "worldss"];
const findLongestString = (arr) => {
  let longStr = "";
  for (let greet of arr) {
    if (greet.length > longStr.length) {
      longStr = greet;
    }
  }
  return longStr;
};
console.log(findLongestString(greetings));

//============================
