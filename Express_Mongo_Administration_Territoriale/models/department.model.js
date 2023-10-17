const mongoose = require('mongoose');

const department = new mongoose.Schema({  
    /* number:{
        type: Number,
        required:true,
        unique: true
    }, */
    name:{
        type:String,
        required: true,
        unique:true
    },
    location:{
        type:String,
        required:true,
    },
   
});


module.exports = mongoose.model('department',department);