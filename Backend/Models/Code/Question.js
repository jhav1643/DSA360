const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    type:{
        type:String,
        required: true
    },

    questions:{ 
        type: String,
        required: true
    },

    link:{
        type:String,
        required: false
    }
});

module.exports = mongoose.model('Question', questionSchema);