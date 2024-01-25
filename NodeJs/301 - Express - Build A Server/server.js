import express from "express";

const app = express()
const user = {
    name:"Amina",
    age:99

}
app.get("/",(req, res) =>{
    res.send(`rooti`)
})
app.get("/profile",(req,res)=>{
    res.send(user)
})


app.listen(3002)

