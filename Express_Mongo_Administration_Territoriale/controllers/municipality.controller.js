const municipalityModel = require('../models/municipality.model');

//Récupérer toutes les communes
const getAllMunicipality = async (req, res)=>{
    const municipality = await municipalityModel.find();
    //res.status(200).send(municipality)
    if(municipality.length === 0){
        return res.status(400).send('Donnée non disponible!')
    }
    var municipalityName = "";

    for(let i=0; i<municipality.length; i++){
        municipalityName += municipality[i].nameMunicipality+' ';
    }

    res.status(200).send(municipalityName)
};


//Ajouter une commmune
const setMunicipality = async (req, res, next) =>{
    const newMunicipality = new municipalityModel({
        number: req.body.number,
        nameDepartment: req.body.nameDepartment,
        nameMunicipality: req.body.nameMunicipality,
    });

    try{
        const municipality = await newMunicipality.save();
        if(!municipality){
            return res.status(400).send('Schema/Model non conforme !')
        }
        return res.status(201).send('Commune ajoutée avec succès !');
    }catch(err){
        return res.status(400).json({message: err})
    } 
}


//Récupérer les communes d'un département
const getDepartmentSpecifiqMunicipality = async (req, res)=>{
    const nameDept = req.params.name;
    const municipality = await  municipalityModel.find({nameDepartment: nameDept});
    if(!municipality){
        return res.status(400).send('Département non trouvé !')
    }
    /* var nameMunicipality = "";
    for(let i= 0; i < municipality.length; i++){
        nameMunicipality += municipality[i].nameMunicipality+' '
    } */
    //res.status(200).send(nameMunicipality)
    res.status(200).send(municipality)
    
    //res.json(department)
};


//Récupérer une commune spécifique
const getMuniSpecifiq = async (req, res)=>{
    const nameMunic = req.params.namemunic;
    const municipality = await  municipalityModel.find({nameMunicipality: nameMunic});
    if(!municipality){
        return res.status(400).send('Commune non trouvée !')
    }
    res.status(200).send(municipality)
    //res.json(department)
};


//Modifié une commune à base de son nom comme identifiant
const updateMunicipality = async (req, res) =>{
    const nameMunic = req.params.name;

    try{
        const municipality = await municipalityModel.findOneAndUpdate(
            {nameMunicipality: nameMunic},
            {
                //number: req.body.number,
                nameDepartment: req.body.nameDepartment,
                nameMunicipality: req.body.nameMunicipality,
            },
            {new: true}
        );
        if(!municipality){
            return res.status(400).send('Municipality Not Found ');
        }
        return res.status(200).send(municipality);  
    }catch(err){
        return res.status(400).json({message: err})
    } 
};


//Supprimer une commune à base de son nom comme identifiant
const deleteMunicipality = async (req, res) =>{
    const nameMunic = req.params.name;
    
    try{
        const deleteMunicipality = await municipalityModel.findOneAndDelete({nameMunicipality: nameMunic})
        
        if(!deleteMunicipality){
            return res.status(400).send('Commune non trouvée! ');
        }
        return res.status(200).send('Commune supprimé avec succès...');
    }catch(err){
        return res.status(400).json({message: err})
    } 
}

module.exports = {
    setMunicipality, 
    getAllMunicipality, 
    getDepartmentSpecifiqMunicipality, 
    getMuniSpecifiq, 
    updateMunicipality,
    deleteMunicipality
}