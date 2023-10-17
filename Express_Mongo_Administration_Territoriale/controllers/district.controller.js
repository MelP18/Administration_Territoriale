const districtModel = require('../models/district.model');


//Récupérer tous les arrondissements(nom)
const getAllDistrict = async (req, res, next)=>{
    const district = await districtModel.find();
    //res.status(200).send(district)
    if(district.length === 0){
        return res.status(400).send('Donnée non disponible!')
    }
    var districtName = "";
    for(let i=0; i<district.length; i++){
        districtName += district[i].nameDistrict+' ';
    }
    res.status(200).send(districtName)
};


//Ajouter un arrondissement
const setDistrict = async (req, res) =>{
    const newDistrict = new districtModel({
        number: req.body.number,
        nameMunicipality: req.body.nameMunicipality,
        nameDistrict: req.body.nameDistrict,
    });

    try{
        const district = await newDistrict.save();
        if(!district){
            return res.status(400).send('Schema/Model non conforme !')
        }
        return res.status(201).json(district);
    }catch(err){
        return res.status(400).json({message: err})
    } 
}


//Modifier un arrondissement à base de son nom comme identifiant
const updateDistrict = async (req, res) =>{
    const nameDist = req.params.name;

    try{
        const district = await districtModel.findOneAndUpdate(
            {
                nameDistrict: nameDist
            },
            {
                nameMunicipality: req.body.nameMunicipality,
                nameDistrict: req.body.nameDistrict,
            },
            {new: true}
        );
        if(!district){
            return res.status(400).send('Arrondissement non trouvé !');
        }
        return res.status(200).send('Arrondissement modifié ave succès !');  
    }catch(err){
        return res.status(400).json({message: err})
    } 
};


//Supprimer un arrondissement à base de son "nom" comme identifiant
const deleteDistrict = async (req, res) =>{
    const nameDist = req.params.name;

    try{
        const district = await districtModel.findOneAndDelete({nameDistrict: nameDist})
        if(!district){
            return res.status(400).send('Arrondissement non trouvé !');
        }
        return res.status(200).send('Arrondissement supprimé ave succès !');
    }catch(err){
        return res.status(400).json({message: err})
    } 
}


module.exports = {
    setDistrict, 
    getAllDistrict,
    updateDistrict,
    deleteDistrict
}