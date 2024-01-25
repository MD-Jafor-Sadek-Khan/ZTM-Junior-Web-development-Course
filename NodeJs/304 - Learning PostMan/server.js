import express  from "express";
import bodyParser from "body-parser";

const app = express()


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get("/", (req, res)=>{
    res.send("<h1>hello kala</h1>")
})

app.get("/profile", (req, res)=>{
    res.send("<h1>Hi</h1>")
})

app.post("/profile", (req, res)=>{
    const user = req.body
    res.send(user)
})
app.listen(3003)