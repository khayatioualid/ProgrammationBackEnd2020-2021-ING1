const request = require('request');

function calcul(x,y)
{
    const calculPromise=new Promise((resolve,reject)=>{
        request(`http://localhost:4000?x=${x}&y=${y}`, { json:true }, (err, res, body) => {
            if (err) { 
                reject("erreur réseau.");
                return 
            }
            resolve(res.body.result);
        });
    })
    return calculPromise
}

// version parallele 10+20+30+40+50+60+70+80

let p1=calcul(10,20)
let p2=calcul(30,40)
let p3=calcul(50,60)
let p4=calcul(70,80)

Promise.all([p1,p2,p3,p4]).then((resultats)=>{
    console.log(resultats)
    let p5=calcul(resultats[0],resultats[1])
    let p6=calcul(resultats[2],resultats[3])
    Promise.all([p5,p6]).then((resultats)=>{
        console.log(resultats)
        let p7=calcul(resultats[0],resultats[1])
        p7.then((val)=>{
            console.log("resultat="+val)
        }).catch((message)=>{
            console.log(message);
        })
    })

})




