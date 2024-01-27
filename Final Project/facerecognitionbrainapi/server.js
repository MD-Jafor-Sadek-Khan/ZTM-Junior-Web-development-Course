// Using bcrypt-nodejs
const bcrypt = require("bcrypt-nodejs")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { count } = require("console")

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

  login: [
    {
      id: 1,
      email: "Rahat@gmail.com",
      password: "",
    },
    {
      id: 2,
      email: "Jafor@gmail.com",
      password: "",
    },
  ],
}

const app = express()

app.use(cors())

app.use(bodyParser.json())

//! Get all users
app.get("/", (req, res) => {
  res.json(dataBase.userList)
})

//! User sign-in
app.post("/signin", (req, res) => {
  const { email, password } = req.body
  const status = {
    success: "Success!",
    error: "Error",
  }

  // Check if user with given email and password exists

  //   ?for deployment
  //   const userData = dataBase.login.filter((user) => {

  //     return user.email === email && bcrypt.compareSync(password, user.password);
  //   })

  // ! ================>
  // ? for testing

  const userData = dataBase.userList.filter((user) => {
    return user.email === email && user.password === password
  })
  // ! ================>

  res.json(userData.length > 0 ? status.success : status.error)
})

//! User registration
app.post("/register", (req, res) => {
  idCount++
  const { name, email, password } = req.body

  // Add a new user to the user list
  dataBase.userList.push({
    id: idCount,
    name: name,
    email: email,
    count: 0,
    registerDate: new Date(),
  })

  bcrypt.hash(password, null, null, (err, hash) => {
    dataBase.login.push({
      id: idCount,
      email: email,
      password: hash,
    })
  })

  // Respond with the newly registered user's information

  res.json(dataBase.userList[dataBase.userList.length - 1])
})

//! Get user profile by ID
app.get("/profile/:id", (req, res) => {
  const { id } = req.params

  // Find user by ID
  const userData = dataBase.userList.filter((user) => {
    return user.id == id
  })

  // Respond with user information if found, otherwise "Not Found"
  if (userData.length > 0) {
    res.json(userData)
  } else {
    res.json("Not Found")
  }
})

//! Update user image API request count
app.put("/image", (req, res) => {
  const { id } = req.body
  // Find user by ID and update the image count
  let flagCount = 0
  dataBase.userList.forEach((user) => {
    if (user.id == id) {
      user.count += 1
      flagCount = user.count
    }
  })
  res.json(flagCount)
})

//! Start the server on port 3005
app.listen(3005, () => {
  console.log("server started at localhost:3005")
})
