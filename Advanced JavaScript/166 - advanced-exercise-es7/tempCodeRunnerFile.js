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