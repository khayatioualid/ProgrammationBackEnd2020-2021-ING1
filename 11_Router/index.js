const simpleBirds = require('./birds')
const complexBirds = require('./birds')
const express = require('express')

const app=express()
const port=3000
app.use('/simple/birds', simpleBirds)
app.use('/complex/birds', complexBirds)
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
