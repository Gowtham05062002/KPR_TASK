const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    username : {
        type:"string",
        required :true
    },
    email : {
        type:"string",
        required :true
    },
    phone : {
        type: Number,
        required :true
    },
    password : {
        type:"string",
        required :true
    },
    date : {
        type:Date,
        default : Date.now
    }
})

module.exports = new mongoose.model('signupData' , userData);