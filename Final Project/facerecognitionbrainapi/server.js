// Packeges Import
const express = require("express")
const cors = require("cors")
const knex = require("knex")
const bcrypt = require("bcrypt-nodejs")
const bodyParser = require("body-parser")

// Controllers Import
const register = require("./controllers/register")
const signin = require("./controllers/signin")
const profile = require("./controllers/profile")
const image = require("./controllers/image")


// Packeges
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

// Routes
app.post("/signin", signin.handleSignin(db, bcrypt))
app.post("/register", register.handleRegister(db, bcrypt))
app.get("/profile/:id", profile.handleProfileGet(db))
app.put("/image", image.handleImage(db))
app.post("/imageurl", (req, res)=> {image.handleClarifyApiCall(req, res)})

// Server Port
app.listen(3005, () => {
  console.log("server started at localhost:3005")
})
