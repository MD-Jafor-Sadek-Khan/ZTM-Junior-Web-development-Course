const bcrypt = require("bcrypt-nodejs")

// var hash = bcrypt.hashSync("bacon");

// bcrypt.compareSync("bacon", hash); // true
// bcrypt.compareSync("veggies", hash); // false

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     //! Store hash in your password DB.
// });

// //! Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     //! res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     //! res = false
// });

const dataBase = {
  userList: [],
}

const { userList} = dataBase

// Synchronous

var synHash = bcrypt.hashSync("bacon")
// console.log(hash)

// const synState = bcrypt.compareSync("bacon", hash) // true
// console.log(state)

// const synState2 = bcrypt.compareSync("veggies", hash) // false
// console.log(state2)

// Asynchornous

bcrypt.hash("bacon", null, null, function (err, hash) {
  dataBase.userList.push({
    name:"rahat",
    password:hash
  })
})
bcrypt.hash("bacon", null, null, function (err, hash) {
  dataBase.userList.push({
    name:"rahat",
    password:hash
  })
})

let rest = false
bcrypt.compare("bacon", synHash, function(err, res) {
    rest = res
});


setTimeout(() => {
    const synState = bcrypt.compareSync("bacon", userList[0].password)
    console.log("jum",rest)
    
}, 0);