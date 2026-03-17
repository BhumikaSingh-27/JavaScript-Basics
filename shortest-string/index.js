// Write an ES6 function that takes an array of strings and returns the shortest string in the array.
const shortestString = (arrStr) =>{
    let shortString = arrStr[0];
    for(let i=1; i<arrStr.length; i++){
        if(arrStr[i].length < shortString.length){
            shortString = arrStr[i];
        }
    }
    return shortString;
}
console.log(shortestString(["primary", "secondary", "education", "exams"])); // exams
