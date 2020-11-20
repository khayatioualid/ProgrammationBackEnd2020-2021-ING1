const mymodule=require("./mymodule")
const mymoduleComplexe=require("./mymoduleComplexe")
const {somme,produit}=require("./mymoduleComplexe")

console.log("module mymodule est chargé")
console.log("somme(10,15)="+mymodule(10,15))

console.log("module mymoduleComplexe est chargé")
console.log("somme(10,15)="+mymoduleComplexe.somme(10,15))
console.log("produit(10,15)="+mymoduleComplexe.produit(10,15))

console.log("module mymoduleComplexe est chargé")
console.log("somme(10,15)="+somme(10,15))
console.log("produit(10,15)="+produit(10,15))