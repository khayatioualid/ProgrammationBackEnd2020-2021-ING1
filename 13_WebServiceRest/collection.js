function init(collectionName,urlServer,schemaParam)
{
    const mongoose=require("mongoose")
    mongoose.connect(urlServer, {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});    
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
    router.put('/:id', async function (req, res) {
        let id=req.params.id
        const filter = { _id: id };
        const updateObject = req.body;
        console.log(id)
        console.log(filter)
        console.log(updateObject)
        /* en utilisant le callback
        model.findOneAndUpdate(filter, updateObject, {new: true},(err,updatedObject) =>{
            if(err){
                return res.status(500).send(err)
            }else{
                return res.status(500).send(updatedObject)
            }
        });
        */
        /* version utilisant await try and catch */
        try{
            let updatedObject=await model.findOneAndUpdate(filter, updateObject)
            return res.status(500).send(updatedObject)
        }catch(err){
            return res.status(500).send(err)
        }

        //model.findOneAndUpdate()
    })

    router.get('/', function (req, res) {
        model.find(function(err,response){
            if(err){
                res.send("erreur dans getAll")
            }else{
                res.send(response)
            }
        });
    })
    // webservice de suppression d'un document selon un id

    // recuperer tous les document d'une collection
    router.get('/:id', function (req, res) {
        //res.send(`id = ${req.params.id} collection`)
        model.find({_id: req.params.id},function(err,response){
            if(err){
                res.send("erreur dans getbyid")
            }else{
                res.send(response[0])
            }
        });
    })
    return router
}

module.exports = init