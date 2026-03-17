// - Write an ES6 function that takes an object representing a car and returns its make, model and year using object destructuring.
    
//     `*// Your ES6 code here*const car = {  make: 'Toyota',  model: 'Corolla',  year: 2015,  color: 'gray',}getCarDetails(car) *// "Make: Toyota, Model: Corolla, Year: 2015"*`

const getCarDetails = (obj) =>{
    const {make,model,year} = obj
    return `Make:${make}, Model:${model}, year:${year}`
}

const car = {  make: 'Toyota',  model: 'Corolla',  year: 2015,  color: 'gray'};
console.log(getCarDetails(car))