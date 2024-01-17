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