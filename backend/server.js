const express = require("express")
const cors = require('cors')
require("dotenv").config()
const DBconnect = require("./config/db.js")
const todorouter = require("./routes/todoroute.js")
DBconnect()
const app = express()
const port = 3000
app.use(express.json())


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello to the Future!')
})
app.use("/api/todo", todorouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})