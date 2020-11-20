function init(collectionName,urlServer,schemaParam)
{
    const mongoose=require("mongoose")
    mongoose.connect(urlServer, {useNewUrlParser: true});  
    const db = mongoose.connection;
    db.on('error', function(){
        console.log("connection non réussie...")
    });
    db.once('open', function() {
    // we're connected!
    console.log("connection réussie...")
    }); 
    
    var express = require('express')
    var router = express.Router()

    // middleware that is specific to this router
    router.use(function timeLog (req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // création du modèle : c'est la classe responsable de la manipulation de la collection "table" de document
    const schema = new mongoose.Schema(schemaParam);
    const model = mongoose.model(collectionName, schema);
    // webservice d'ajout d'un document
    router.post('/', function (req, res) {
        const document = new model(req.body);
        document.save(function (err) {
            if (err) {
                console.log("erreur d'ajout d'un document.")
            };
            console.log("l'ajout d'un document est réussi.")
        });
        res.send(`document added to ${collectionName} collection`)
    })
    // webservice d'update d'un document

    // webservice de recherche d'un document par id

    // webservice de suppression d'un document selon un id

    // recuperer tous les document d'une collection
    return router
}

module.exports = init