
const express = require('express')
const parsebody=require("body-parser")

const app = express()
app.use(parsebody.json())

app.get("/",function(req,res){
    let x=parseFloat(req.query.x)
    let y=parseFloat(req.query.y)
    console.log("x="+x)
    res.send(JSON.stringify({ result: x+y }))
})
app.get("/params/:x/:y",function(req,res){
    let x=parseFloat(req.params.x)
    let y=parseFloat(req.params.y)
    console.log("x="+x)
    for(let i=0;i<10;i++){
        console.log(i)
    }
    res.send(JSON.stringify({ result: x+y }))
})
const port = 4000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })