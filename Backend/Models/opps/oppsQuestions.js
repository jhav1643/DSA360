const mongoose = require('mongoose');

const questionSchemas = new mongoose.Schema({
    Ques:{
        type: String,
        required: true
    },

    Ans:{
        type: String,
        required : true
    }
})

module.exports = mongoose.model('oppsQuestions', questionSchemas);