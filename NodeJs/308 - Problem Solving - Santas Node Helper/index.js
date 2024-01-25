const fs = require("fs")
let count = 0
let flag = false
fs.readFile("./input.txt", (err, data) => {
    console.time("funchallenge")
    let c
    const length = data.length
    for (let i = 0; i < length; i++) {
      if (data[i] === 40) {
        count += 1
      } else {
        count -= 1
      }

      if(count === -1 && flag === false){
        flag = true
        c= i+1
      }
    }
    console.timeEnd("funchallenge")
    console.log(count)
    console.log(c);

})


