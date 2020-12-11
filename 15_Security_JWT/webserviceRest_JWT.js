const express = require('express')
const app = express()
const port = 9000
const signature="AZERTYUIOP1234567890&"
const njwt=require("njwt")

function authentificationTokenVerificationMiddleWare(req,res,next){
    //console.log(req)
    //console.log(req.headers)
    if(req._parsedUrl.pathname=="/login") next()  // pour ignorer le webservice de login

    let authHeader=req.headers.authorization
    let token=authHeader && authHeader.split(" ")[1]
    if(token==null) return res.sendStatus(401) // return  401 status if token not passed in the request header

    njwt.verify(token,signature, (err,verifiedJwt)=>{
        if(err){
            console.log(err)
            return res.status(401).send("Token non valide")
        }else{
            //console.log(verifiedJwt)
            req.userInfo=verifiedJwt.body
            next();
        }
    })
}
app.use(authentificationTokenVerificationMiddleWare)

app.get('/login', (req, res) => {
    console.log(req.query)
    let login= req.query.login
    let password= req.query.password
    let token=null
    if((login=="userlogin")&&(password=="userpassword")){
        let payload={
            user:"userlogin",
            serveurCreationToken:"http://localhost:9000",
            roles:["user"]
        }
        let jwt=njwt.create(payload,signature)
        console.log(jwt)
        token=jwt.compact();
        console.log(token)
        return res.send({token:token})
    }
    if((login=="adminlogin")&&(password=="adminpassword")){
        let payload={
            user:"adminlogin",
            serveurCreationToken:"http://localhost:9000",
            roles:["admin","user"]
        }
        let jwt=njwt.create(payload,signature)
        console.log(jwt)
        token=jwt.compact();
        console.log(token)
        return res.send({token:token})
    }

    return res.send({token:token})

})

app.get('/calcul', (req, res) => {
    //console.log(req.query)
    //console.log(req.userInfo)
    if(!req.userInfo.roles.includes("admin")){
        return res.status(401).send("Admin Role est required")
    }
    let x=parseFloat( req.query.x)
    let y=parseFloat( req.query.y)
    let operation=req.query.operation
    let result=new Object;
    switch (operation)
    {
        case "add" :
            result.result=x+y;
            res.send(result)
            break;
        case "sub" :
            result.result=x-y;
            res.send(result)
            break;
        case "mul" :
            result.result=x*y;
            res.send(result)
            break;
        case "div" :
            result.result=x/y;
            res.send(result)
            break;
        default:
            res.send(`"${operation}" : opération inconnue.`);
        }
    })
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})