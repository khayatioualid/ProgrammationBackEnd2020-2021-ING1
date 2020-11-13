// cet exemple présente la declaration de plusieurs webservices avec la meme route
// le premier webservice declaré sera celui qui sera executé et les autres sont ignorés

var bodyParser = require('body-parser');


const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json()); // support json encoded bodies

function mid1(req, res,next){
  console.log("mid1 traitement 1")
  next()
  //console.log("mid1 traitement 2")
}
function mid2(req, res,next){
  //console.log("mid2 traitement 1")
  next()
  console.log("mid2 traitement 2")
}
app.use(mid1);
app.use(mid2);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/somme', (req, res) => {
  let x=parseFloat(req.query.x)
  let y=parseFloat(req.query.y)
  res.send('Hello World get somme = '+(x+y))
})

app.post('/somme', (req, res) => {
  console.log("somme post version 1")
  let x=parseFloat(req.body.x)
  let y=parseFloat(req.body.y)
  res.send('Hello World post somme = '+(x+y))
})

app.post('/somme', (req, res) => {
  console.log("somme post version 2")
  let x=parseFloat(req.body.x)
  let y=parseFloat(req.body.y)
  res.send('Hello World post somme = '+(x+y))
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})