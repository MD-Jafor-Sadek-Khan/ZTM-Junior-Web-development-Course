const handleProfileGet = (db) =>(req, res) => {
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
  
  }

  module.exports={
    handleProfileGet:handleProfileGet
  }