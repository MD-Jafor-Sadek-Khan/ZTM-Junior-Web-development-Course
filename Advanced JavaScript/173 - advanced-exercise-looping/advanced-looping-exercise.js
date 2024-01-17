const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:


const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let prev = Number.MIN_SAFE_INTEGER
  for(const i of arr){
    if(i > prev) prev = i
    continue

  }
  return prev === Number.MIN_SAFE_INTEGER ? 0 : prev
}

console.log(biggestNumberInArray(array3));



function biggestNumberInArray2(arr) {
  let prev = 0
  for(const i in arr){
    if(arr[i] > prev) prev = arr[i]
    continue
  }
  return prev
}

console.log(biggestNumberInArray2(array));
console.log(biggestNumberInArray2(array2));
console.log(biggestNumberInArray2(array3));

function biggestNumberInArray3(arr) {
    let prev = Number.MIN_SAFE_INTEGER
    arr.forEach(i =>{
      if(i > prev) prev = i
      return
    })

    return prev === Number.MIN_SAFE_INTEGER ? 0 : prev
}

console.log(biggestNumberInArray3(array));
console.log(biggestNumberInArray3(array2));
console.log(biggestNumberInArray3(array3));




// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  if(Object.entries(amazonBasket).flat().includes(lookingFor)) return true
  return false
}

console.log(checkBasket(amazonBasket, "glasses"));
console.log(checkBasket(amazonBasket, "glasse"));