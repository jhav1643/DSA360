const express = require("express");
const Question = require("./Question");

const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const ques = await Question.find();
        res.send(ques);
    }

    catch(err){
        console.log(err.message);
    }
});

module.exports = router;