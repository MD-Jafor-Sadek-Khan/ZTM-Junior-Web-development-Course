const handleImage = (db) =>(req, res) => {
    const { id } = req.body
    // Find user by ID and update the image count
    db('users')
    .where('id', '=', id)
    .returning('count')
    .increment('count', 1)
    .then(count => res.json(Number(count[0].count)))
    .catch(err => res.status(400).json("Error!!!"))
  }

  module.exports={
    handleImage:handleImage
  }