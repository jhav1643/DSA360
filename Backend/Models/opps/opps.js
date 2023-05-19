const express = require('express');
const oppsQuestions = require("./oppsQuestions");

const router = express.Router();

router.get('/a', async(req, res)=>{
    try{
        const ques = await oppsQuestions.find();
        res.send(ques);
    }

    catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
})

module.exports = router;