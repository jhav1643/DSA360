const mongoose = require('mongoose');

const questionSchemas = new mongoose.Schema({
    Ques:{
        type: String,
        required: true
    },

    Ans:{
        type: String,
        required : true
    },

    Code1:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model('cppQuestions', questionSchemas);