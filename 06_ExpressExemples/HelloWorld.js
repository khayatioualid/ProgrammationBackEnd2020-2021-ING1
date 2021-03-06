var bodyParser = require('body-parser');


const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json()); // support json encoded bodies

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/somme', (req, res) => {
  let x=parseFloat(req.query.x)
  let y=parseFloat(req.query.y)
  res.send('Hello World get somme = '+(x+y))
})

app.post('/somme', (req, res) => {
  let x=parseFloat(req.body.x)
  let y=parseFloat(req.body.y)
  res.send('Hello World post somme = '+(x+y))
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})