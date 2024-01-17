// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

console.log(dragons.includes("John"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const johnList = dragons.filter(name => name.includes("John"))
console.log(johnList);


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
function powerOf100 (number){
    return number**100
}
function powerOf100n (number){
    return BigInt(number)**100n
}
const myBigNumber = powerOf100(200)
console.log(myBigNumber);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

const myBigNumber2 = powerOf100n(10000)
console.log(myBigNumber2);