const http=require("http")
const url=require("url")

function somme(x,y){
    return x+y
}
function produit(x,y){
    return x*y
}

/*
  l'objectif est la creation d'un webservice qui traite l'url sous la forme
  localhost:8000?operation=somme&x=5&y=10  et retourne la valeur 15
  localhost:8000?operation=produit&x=5&y=10  et retourne la valeur 50
*/

function calculateur(req,res){
    res.write("url : "+req.url+"\n")
    let parsedUrl=url.parse(req.url,true)

    let operation=parsedUrl.query.operation
    let x=parseFloat(parsedUrl.query.x)
    let y=parseFloat(parsedUrl.query.y)
    if(operation=="somme"){
        res.end("Resultat="+somme(x,y))
        return
    }
    if(operation=="produit"){
        res.end("Resultat="+produit(x,y))
        return
    }
    res.end("Operation inconnu!")
}

console.log("Server loaded.")
let serveur=http.createServer(calculateur)
serveur.listen(8000,"localhost")
console.log("Server unloaded.")