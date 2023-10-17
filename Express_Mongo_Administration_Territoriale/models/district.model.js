const mongoose = require('mongoose');
  
const district = new mongoose.Schema({
    number:{
        type: Number,
        required:true,
        unique:true
    },
    nameMunicipality:{
        type:String,
        required: true,
    },
    nameDistrict:{
        type:String,
        required: true,
        unique:true
    }
  
})

module.exports = mongoose.model('distrit',district);