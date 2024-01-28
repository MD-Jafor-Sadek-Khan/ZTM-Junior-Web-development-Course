const handleSignin = (db, bcrypt) => (req, res) => {
    const { email, password } = req.body
    if(!email || !password){
        return res.status(400).json("Unable to Signin")
    }


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
  
  }


  module.exports={
    handleSignin:handleSignin
  }