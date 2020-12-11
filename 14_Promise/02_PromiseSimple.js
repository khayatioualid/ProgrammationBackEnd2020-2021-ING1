/*
let p=new Promise((resolve,reject)=>{
    let a=6
    if(a%2==0){
        resolve("a est paire")
    }else{
        reject("a est impaire")
    }
})


p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
*/
const request = require('request');
//version simple
/*
let x= 10
let y= 20
const calcul=new Promise((resolve,reject)=>{
    request(`http://localhost:4000?x=${x}&y=${y}`, { json:true }, (err, res, body) => {
        if (err) { reject("erreur réseau.") }
        resolve(res.body.result);
    });
})

//version simple 10+20
calcul.then((val)=>{
    console.log("resultat="+val)
}).catch((message)=>{
    console.log(message);
})
*/

//version compliqué 10+20+30

let x=10
let y=20
let s=0

const calcul1=new Promise((resolve,reject)=>{
    request(`http://localhost:4000?x=${x}&y=${y}`, { json:true }, (err, res, body) => {
        if (err) { reject("erreur réseau.") }
        resolve(res.body.result);
    });
})
calcul1.then((val)=>{
    console.log("resultat1="+val)
    s=val
    x=s;
    y=30
    const calcul2=new Promise((resolve,reject)=>{
        request(`http://localhost:4000?x=${x}&y=${y}`, { json:true }, (err, res, body) => {
            if (err) { reject("erreur réseau.") }
            resolve(res.body.result);
        });
    })
    calcul2.then((val)=>{
        console.log("resultat2="+val)
        s=val
    }).catch((message)=>{
        console.log(message);
    })
}).catch((message)=>{
    console.log(message);
})




