const fs = require("fs")

const data = fs.readFileSync("./input.txt")
console.time("funchallenge")
let c
let count = 0
let i
let flag = false
const length = data.length
for (i = 0; i < length; i++) {
  if (data[i] === 40) {
    count += 1
  } else {
    count -= 1
  }

  if(count === -1 && flag === false){
    flag = true
    c = i+1
  }
}
console.timeEnd("funchallenge")
console.log(count)
console.log(c);
