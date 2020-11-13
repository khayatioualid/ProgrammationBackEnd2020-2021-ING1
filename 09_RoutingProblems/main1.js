// cet exemple présente la declaration de plusieurs webservices avec la meme route mais avec la possibilité de coexistance
// le premier webservice declaré sera celui qui sera executé en prremier et les autres sont executés dans le meme ordre de declaration
// le premier calcule une somme d'entiers et le deuxieme calcule une somme de float
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
// ajout du parametre next pour permettre l'execution des autres webservices declarant la meme route
app.post('/somme', (req, res,next) => {
  console.log("somme post version 1")
  let x=parseFloat(req.body.x)
  let y=parseFloat(req.body.y)
  res.write('Hello World post somme version 1 (float,float) = '+(x+y)+'\n')
  next()
})

app.post('/somme', (req, res) => {
  console.log("somme post version 2")
  let x=parseInt(req.body.x)
  let y=parseInt(req.body.y)
  res.end('Hello World post somme version 2 (int,int)= '+(x+y)+'\n')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})