// Write an ES6 function that takes an array of numbers and return
// s a new array with only the odd numbers. Avoid using in-built methods.

const getOddNumbers = (arr) =>{
    const oddNumArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            oddNumArr.push(arr[i])
        }
    }
    return oddNumArr
}

console.log(getOddNumbers([1,2,3,4,5,21]))