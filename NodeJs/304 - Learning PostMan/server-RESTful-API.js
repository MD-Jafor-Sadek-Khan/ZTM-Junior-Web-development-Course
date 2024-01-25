const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static(__dirname + "/public"))

app.get("/:id/:root", (req, res) => {
  const header = req.headers
  const query = req.query
  const parameters = req.params
  const body = req.body

  const result =
    JSON.stringify(header) +
    "\n\n\n" +
    JSON.stringify(query) +
    "\n\n\n" +
    JSON.stringify(parameters) +
    "\n\n\n" +
    JSON.stringify(body)


  res.status(200).send(result)
})

app.post("/", (req, res) => {
  console.log(req.header)

  res.send("<h1>hello kala</h1>")
})

app.listen(3003)
