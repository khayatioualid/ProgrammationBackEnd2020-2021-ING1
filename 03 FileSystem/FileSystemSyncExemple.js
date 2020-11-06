const fs=require("fs");

function fileCopySynchrone(source,cible){
    let buffer=fs.readFileSync(source)
    for(let i=0;i<10000;i++){
        console.log("i:"+i)
    }
    console.log(buffer)
    fs.writeFileSync(cible,buffer)
}


fileCopySynchrone("source.txt","cible.txt")