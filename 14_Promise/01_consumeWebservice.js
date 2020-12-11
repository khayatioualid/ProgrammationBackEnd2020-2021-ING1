// c'est pour montrer le probleme de lisibilité du code source lorsqu'on utilise plusieurs appels à 
// des fonctions asynchrones imbriqués dans des callback

const request = require('request');
//version simple  5+20
request('http://localhost:4000?x=5&y=20', { json:true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(res.body.result);
});
//version compliqué 5+20+30+40

let s=0
request('http://localhost:4000?x=5&y=20', { json:true }, (err, res, body) => {
    if (err) { return console.log(err); }
    //console.log(res.body.result);
    s=res.body.result
    request(`http://localhost:4000?x=${s}&y=30`, { json:true }, (err, res, body) => {
        if (err) { return console.log(err); }
        //console.log(res.body.result);
        s=res.body.result
        request(`http://localhost:4000?x=${s}&y=40`, { json:true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(res.body.result);
            s=res.body.result
        });
    });
});

console.log("fin")