// change everything below to the newer Javascript!

// let + const
let a = "test"
let b = true
let c = 789
a = "test2"

console.log("let, const => ", a,b,c);

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
}

let {firstName, lastName, age, eyeColor} = person

console.log("Destructuring",firstName,lastName,age,eyeColor);

// Object properties
 a = "test"
 b = true
 c = 789

const okObj = {
  a,
  b,
  c
}

console.log("Object properties", okObj.a, okObj.b, okObj.c);


// Template strings
const city = "Liver Pool"

let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`

console.log("Template strings",message);


// default arguments
// default age to 10;
function isValidAge(age = 10) {
  return age
}

console.log("default arguments => ",isValidAge());

// Symbol
// Create a symbol: "This is my first Symbol"

let sym = Symbol("This is my first Symbol")

console.log("Symbol", sym);
// Arrow functions

const whereAmI = (username, location) =>{
    return username && location ? "I am not lost" : "I am totally lost!"
}


console.log("Arrow functions", whereAmI(firstName, location));