
function decorateur(oldFunction)
{
    function newFunction(x,y)
    {
        console.log("traitement avant")
        let r=oldFunction(x,y)
        console.log("traitement apres")
        return r
    }
    return newFunction
}

function somme(x,y)
{
    console.log("coucou")
    return x+y
}

console.log("-Avant decoration --------------")
console.log("somme(10,15)="+somme(10,15))


somme=decorateur(somme)
console.log("-Apres decoration --------------")
console.log("somme(10,15)="+somme(10,15))