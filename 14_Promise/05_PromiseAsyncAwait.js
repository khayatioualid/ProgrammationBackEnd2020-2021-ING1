const request = require('request');

function calculer(x,y){
    return new Promise((resolve,reject)=>{
        request(`http://localhost:4000?x=${x}&y=${y}`, { json:true }, (err, res, body) => {
            if (err) { 
                reject("erreur réseau.");
                return 
            }
            resolve(res.body.result);
        });
    })
}

async function travail(){
    try{
        /*  version 1
        let s = await calculer(10,20)
        s = await calculer(s,30)
        */
       let s = await calculer(await calculer(await calculer(10,20),30),40)
        console.log(s)
    }catch(err){
        console.log(err)
    }
}


travail()