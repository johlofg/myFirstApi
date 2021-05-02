import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const port = process.env.PORT || 8080
const app = express()

app.get('/', (req, res) => res.send('hello world'))

app.get('/users', (req, res) => {
  res.json([
    {name:"johan"},
    {name: "bob"},
    {name: "Alice"}
  ])
})

app.listen(3000, () => console.log(`Server running on http://localhost:${port}`))
