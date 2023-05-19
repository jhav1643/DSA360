const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const questionRouter = require('./Models/Code/coding');
const cppRouter = require('./Models/C++/codingcpp');
const oppsRouter = require('./Models/opps/opps');

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
 
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://jhav1643:Vaibhav123@cluster0.umibfzs.mongodb.net/dsa360', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
  console.log('MongoDB Connected')
})
.catch(err=> console.log(err));

app.use('/api/questions', questionRouter);
app.use('/api/cppQuestions', cppRouter);
app.use('/api/opps', oppsRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`)
})

