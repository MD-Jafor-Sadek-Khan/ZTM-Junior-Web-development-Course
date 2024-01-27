// Using bcrypt-nodejs
const bcrypt = require("bcrypt-nodejs")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { count } = require("console")
const knex = require("knex")

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

//! Get all users
app.get("/", (req, res) => {
  res.json(dataBase.userList)
})

//! User sign-in
app.post("/signin", (req, res) => {
  const { email, password } = req.body
    // Check if user with given email and password exists

  db('login').where({
    email:email
  }).select('*')
  .then(user => {
    const validate = bcrypt.compareSync(password, user[0].password)
    if(validate)
    {
     return db("users").where({
        email: user[0].email
      }).select("*")
      .then(user => res.json(user[0]))
    }
  }).catch(err => console.log(err))

})

//! User registration
app.post("/register", (req, res) => {
  const { name, email, password } = req.body
  const hash = bcrypt.hashSync(password);
  // Add a new user to the user list

  db.transaction(trx =>{
    trx('login').insert({
      email: email,
      password: hash
    })
    .returning("email")
    .then(loginEmail =>{
      trx("users")
      .returning("*")
      .insert({
        name: name,
        email: loginEmail[0].email,
        registerdate: new Date(),
      })
      .then((user) => {
        res.json(user[0])
      })      
    })
    .then(trx.commit)
    .catch(trx.rollback)

  })
  .catch((err) => res.status(400).json("Unable To Register"))


  // Respond with the newly registered user's information
})

//! Get user profile by ID
app.get("/profile/:id", (req, res) => {
  const { id } = req.params

  // Find user by ID
  db('users').where({
    id:id
  }).select('*').then(user =>{
    if(user.length > 0 ){
      res.json(user[0])
    }else{

      res.status(400).json("No Users Found")
    }
  })
  .catch(err => res.status(400).json("Error finding User!!!"))

})

//! Update user image API request count
app.put("/image", (req, res) => {
  const { id } = req.body
  // Find user by ID and update the image count
  db('users')
  .where('id', '=', id)
  .returning('count')
  .increment('count', 1)
  .then(count => res.json(Number(count[0].count)))
  .catch(err => res.status(400).json("Error!!!"))
})

//! Start the server on port 3005
app.listen(3005, () => {
  console.log("server started at localhost:3005")
})
