function somme(x,y){
    return x+y
}
function produit(x,y){
    return x*y
}
console.log("code executé dans mymoduleComplexe")

// methode1
/*
module.exports.somme=somme
module.exports.produit=produit
*/

// methode2
/*
module.exports={
    somme:somme,
    produit:produit
}
*/

module.exports={somme,produit}
