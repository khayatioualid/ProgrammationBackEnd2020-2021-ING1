const http=require("http")
let counter=1
function monTraitement1(req,res){
    res.write("hello world V1 : "+counter)
    console.log("hello world V1 : "+counter)
    counter=counter+1
    res.end()
    // perdre du temps pour bloquer le serveur nodeJs et prouver que c'est un monothread
    for(let j=0;j<20000;j=j+1){
        console.log("j="+j)
    }
}
function monTraitement2(req,res){
    res.write("hello world V2 : "+counter)
    console.log("hello world V2 : "+counter)
    counter=counter+1
    res.end()
}

console.log("Server loaded.")
let serveur1=http.createServer(monTraitement1)
let serveur2=http.createServer(monTraitement2)
serveur1.listen(8000,"localhost")
serveur2.listen(8001,"localhost")
console.log("Server unloaded.")
