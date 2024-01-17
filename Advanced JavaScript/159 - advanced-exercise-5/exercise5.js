// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
]

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const forEachArray = []
array.forEach((item) => {
  forEachArray.push({ ...item, username: item.username + "!" })
})
console.log(forEachArray)
//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map((item) => {
  return { ...item, username: item.username + "?" }
})

console.log(mapArray)
//Filter the array to only include users who are on team: red
const filterArray = array.filter((item) => {
  return item.team === "red"
})
console.log(filterArray)
//Find out the total score of all users using reduce

const reduceArrayTotal = array.reduce((acc, item) => {
  return acc + item.score
}, 0)

console.log(reduceArrayTotal)

// (1), what is the value of i?
;(i = 0), 1, 2, 3, 4, 5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9]
const newArray = arrayNum.map((num, i) => {
  return num * 2
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const bonus = array.map((item, index) => {
  let newList2 = []
  if (index !== array.length) {
    const newList = item.items.forEach((item) => {
      newList2.push(item.concat("!"))
    })
  }
  return { ...item, items: newList2 }
})

console.log(bonus)



