import express from "express";
import dotenv from "dotenv";

const app = express()
dotenv.config({
    path: './.env'
})

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/history', (req, res) => {
    res.send('History lvde gandi h teri')
  })

app.listen(process.env.PORT || 4000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})