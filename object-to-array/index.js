// Write an ES6 function that takes an object with x and y properties and returns an array containing the values of x and y

const objToArray = ( obj ) =>{
    const {x,y} = obj;
    return [x,y]
}
const point = { x: 5, y: 10 }
console.log(objToArray(point)) // [5, 10]