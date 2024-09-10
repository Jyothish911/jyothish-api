const mongoose = require('mongoose');

const player = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    availability:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model('player',player);