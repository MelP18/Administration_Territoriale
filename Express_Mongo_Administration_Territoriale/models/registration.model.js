const mongoose = require('mongoose');

const registrationData = new mongoose.Schema({  
    
    username:{
        type:String,
        required: true,
        unique:true
    },
    surname:{
        type:String,
        required: true,
    },
    firstname:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        unique:true
    }
   
});


module.exports = mongoose.model('authentication',registrationData);