const mongoose = require('mongoose');

const municipality = new mongoose.Schema({      
    number:{
        type: Number,
        required:true,
        unique:true
    },
    nameDepartment:{
        type:String,
        required: true,
    },
    nameMunicipality:{
        type:String,
        required: true,
        unique:true
    }
        
})

module.exports = mongoose.model('municipality',municipality);