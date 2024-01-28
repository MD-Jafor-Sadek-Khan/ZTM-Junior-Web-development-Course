const bcrypt = require("bcrypt-nodejs")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { count } = require("console")
const knex = require("knex")
const register = require("./controllers/register")
const signin = require("./controllers/signin")
const profile = require("./controllers/profile")
const image = require("./controllers/image")

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "1964",
    database: "smart-brain",
  },
})

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json(dataBase.userList)
})

app.post("/signin", signin.handleSignin(db, bcrypt))

app.post("/register", register.handleRegister(db, bcrypt))

app.get("/profile/:id", profile.handleProfileGet(db))

app.put("/image", image.handleImage(db))

app.listen(3005, () => {
  console.log("server started at localhost:3005")
})
