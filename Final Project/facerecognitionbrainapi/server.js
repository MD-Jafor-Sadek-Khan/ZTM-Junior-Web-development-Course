// Using bcrypt-nodejs

const bcrypt = require("bcrypt-nodejs")
const express = require("express")
const bodyParser = require("body-parser")

let idCount = 2
const dataBase = {
  userList: [
    {
      id: 1,
      name: "Rahat",
      email: "Rahat@gmail.com",
      password: "1234",
      count: 0,
      registerDate: new Date(),
    },
    {
      id: 2,
      name: "Jafor",
      email: "Jafor@gmail.com",
      password: "9876",
      count: 0,
      registerDate: new Date(),
    },
  ],
}

const app = express()

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json(dataBase.userList)
})

app.post("/signin", (req, res) => {
  const { email, password } = req.body
  const status = {
    success: "Success!",
    error: "Error",
  }
  const userData = dataBase.userList.filter((user) => {
    return user.email === email && user.password === password
  })

  console.log(userData)
  res.json(userData.length > 0 ? status.success : status.error)
})

app.post("/register", (req, res) => {
  idCount++
  const { name, email, password } = req.body
  dataBase.userList.push({
    id: idCount,
    name: name,
    email: email,
    password: password,
    count: 0,
    registerDate: new Date(),
  })

  res.json(dataBase.userList.at(-1))
})

app.get("/profile/:id", (req, res) => {
  const { id } = req.params
  const userData = dataBase.userList.filter((user) => {
    return user.id == id
  })

  if (userData.length > 0) {
    res.json(userData)
  } else {
    res.json("Not Found")
  }
})

app.put("/image", (req, res) => {
  const { id } = req.body
    let flag =  false
  dataBase.userList.forEach(user=>{
    if(user.id == id){
        flag = true
        user.count++
    
    }
  })
  if(!flag) res.json("Not found")
  res.json("Success!!!")

})

app.listen(3005, () => {
  console.log("server staeted at localhost:3005")
})

/*
/singin => POST => user info/ validation error
/register => POST => save and redirect to signin
/profile => GET => user infor
/image => PUT => count var update and rank calculation


*/
