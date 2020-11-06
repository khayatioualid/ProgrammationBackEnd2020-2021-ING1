const http=require("http")

function somme(x,y){
    return x+y
}
function produit(x,y){
    return x*y
}

/*
  l'objectif est la creation d'un webservice qui traite l'url sous la forme
  /somme/5/10  et retourne la valeur 15
  /produit/5/10  et retourne la valeur 50
*/

function calculateur(req,res){
    console.log("req : "+req+"\n")
    res.write("url : "+req.url+"\n")
    let params=req.url.split("/")
    let operation=params[1]
    let x=parseFloat(params[2])
    let y=parseFloat(params[3])
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