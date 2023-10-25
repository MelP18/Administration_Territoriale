const registrationModel = require('../models/registration.model')
const bcrypt = require('bcrypt');

const registration = async (req, res, next) =>{
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    
    const newRegistration = new registrationModel({
        username:  req.body.username,
        surname: req.body.surname,
        firstname: req.body.firstname,
        email: req.body.email,
        password: hashPassword
    });

    try{
        const userData = await newRegistration.save();

        if(!userData){
            return res.status(400).send('Schema/Model non conforme !')
        }
        return res.status(201).json('Inscription effectuée !');

    }catch(err){
        return res.status(400).json({message: err.message})
    } 
}



const connection = async (req, res, next) =>{
    
    const {email, password} = req.body

    try{
        const connectionData = await registrationModel.findOne({email});

        if(connectionData && bcrypt.compare(password, connectionData.password)){
                res.status(200).send('Connection Etablie')           
        }    
         
        res.status(400).send('Donnée Incorrecte !') 

    }catch(err){
        return res.status(400).json({message: err.message})
    } 
}


module.exports = {
    registration,
    connection
}