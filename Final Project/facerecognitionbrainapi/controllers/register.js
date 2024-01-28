const handleRegister = (db, bcrypt) =>(req, res ) => {
    const { name, email, password } = req.body
    if(!name || !email || !password){
        return res.status(400).json("Unable to Register")
    }

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
  }

  module.exports = {
    handleRegister:handleRegister
  }