const fs=require("fs");

function fileCopyAsynchrone(source,cible){
    console.log("debut copie de "+source);
    fs.readFile(source,function(err, data) {
        if (err) throw err;
        //console.log(data);
        fs.writeFile(cible,data,function(err) {
            if (err) throw err;
            console.log("fin copie de "+source);
          })
      })
    let ch=""
    for(let i=0;i<30000000;i++){
        ch=ch+"A"
        //console.log("i:"+i)
    }
    
  
}

fileCopyAsynchrone("./Data/a.mp4","./Data/b.mp4")
fileCopyAsynchrone("./Data/source.txt","./Data/cible.txt")

