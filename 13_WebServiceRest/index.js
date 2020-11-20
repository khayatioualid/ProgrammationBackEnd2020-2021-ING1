const collection=require("./collection")
const parsebody=require("body-parser")

const users=collection("users",'mongodb://localhost:27018/DocumentsBase',{ name: 'string', login: 'string', password: 'string' }) // il faut la changer en 27017
const voitures=collection("voiture",'mongodb://localhost:27018/DocumentsBase',{ couleur: 'string', marque: 'string' }) // il faut la changer en 27017

const express = require('express')

const app=express()
const port=3000

app.use(parsebody.json())
app.use('/users', users)
app.use('/voitures', voitures)

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
