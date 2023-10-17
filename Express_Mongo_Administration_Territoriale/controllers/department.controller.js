const departmentModel = require('../models/department.model');


//Récupérer tous les département(nom)
const getAllDepartmnt = async (req, res, next)=>{
    //res.send(departmntModel[0]);
    const department = await  departmentModel.find();
    //res.status(200).send(department)
    if(department.length === 0){
        return res.status(400).send('Donnée non disponible!')
    }
    /* var departmentName = "";

    for(let i=0; i<department.length; i++){
        departmentName += department[i].name+' ';
    } 
    res.status(200).send(departmentName)*/
    
    res.status(200).send(department)
};


//Ajouter un département
const setDepartment = async (req, res, next) =>{
    
    const newDepartment = new departmentModel({
       /*  number: req.body.number, */
        name: req.body.name,
        location: req.body.location,
    });

    try{
        const departmnt = await newDepartment.save();
        if(!departmnt){
            return res.status(400).send('Schema/Model non conforme !')
        }
        return res.status(201).json('Département ajouté avec succès !');
    }catch(err){
        return res.status(400).json({message: err})
    } 
}


//Récupérer un département spécifiq à base de son id(number) comme identifiant
const getDepartmentSpecifiq = async (req, res)=>{
    const idDepartment = req.params.id;
    try{
        const department = await  departmentModel.findOne({number: idDepartment});
        if(!department){
            return res.status(400).send('Department non trouvé !');
        }
        res.status(200).send(department)
    }catch(err){
        return res.status(400).json({message: err})
    }

};


//Modifié un département à base de son nom comme identifiant
const updateDepartment = async (req, res) =>{
    const nameDepartment = req.params.name;
    try{
        const department = await departmentModel.findOneAndUpdate(
            {name: nameDepartment},
            {
                name: req.body.name,
                location: req.body.location
            },
            {new: true}
        );
        if(!department){
            return res.status(400).send('Département non trouvé !');
        }
        return res.status(200).send('Département modifié avec succès !');
    }catch(err){
        return res.status(400).json({message: err})
    } 
};


//Supprimer un déartement à base de son nom comme identifiant
const deleteDepartment = async (req, res) =>{
    const nameDepartment = req.params.name;
    try{
        const updatedepartment = await departmentModel.findOneAndDelete({name : nameDepartment})
        if(!updatedepartment){
            return res.status(400).send('Département non trouvé !');
        }
        return res.status(200).send('Département supprimé avec succès');

    }catch(err){
        return res.status(400).json({message: err})
    } 
}


module.exports = {
    setDepartment ,
    getAllDepartmnt, 
    getDepartmentSpecifiq, 
    updateDepartment,
    deleteDepartment
}