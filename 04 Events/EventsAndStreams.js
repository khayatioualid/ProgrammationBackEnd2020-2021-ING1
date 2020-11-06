var fs = require('fs');
var rs = fs.createReadStream('./Data/source.txt', { 
    flag: 'a+', 
    encoding: 'UTF-8', 
});
rs.on('open', function () {
  console.log('Le fichier est ouvert');
});
rs.on('data', function (data) {
    console.log('Le fichier est en cours de traitement');
    console.log("data : "+data)
});
rs.on('close', function () {
  console.log('Le fichier est fermé');
});
