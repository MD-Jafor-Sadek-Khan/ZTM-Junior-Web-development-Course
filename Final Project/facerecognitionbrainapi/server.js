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
      count: 0,
      registerDate: new Date(),
    },
    {
      id: 2,
      name: "Jafor",
      email: "Jafor@gmail.com",
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
  const userData = dataBase.login.filter((user) => {


    return user.email === email && bcrypt.compareSync(password, user.password);
  })

  console.log(userData)
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
        id:idCount,
        email:email,
        password:hash
    })
  })

  // Respond with the newly registered user's information
  setTimeout(() => {
    res.json(dataBase.userList.at(-1))
  }, 0);
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
  let flag = false

  // Find user by ID and update the image count
  dataBase.userList.forEach((user) => {
    if (user.id == id) {
      flag = true
      user.count++
    }
  })

  // Respond with "Not found" if user not found, otherwise "Success!!!"
  if (!flag) res.json("Not found")
  res.json("Success!!!")
})

//! Start the server on port 3005
app.listen(3005, () => {
  console.log("server started at localhost:3005")
})
