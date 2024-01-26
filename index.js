let express = require('express')
let app = express();
let mongoose = require('mongoose')
let postRoute = require('./routes/crudOperations')

//MiddleWares
app.use(express.json())
app.use('/post',postRoute);

//Connecting To DataBase
mongoose.connect("mongodb+srv://levakupradeepkumar:January25@cluster0.oa6xmtw.mongodb.net/").then(()=>{
    console.log("Connected To DB")
})
//For Testing Purpose
app.get('/',(req,res)=>{
    res.send("Hello World")
})

//For Server Running
app.listen(8000,()=>{
    console.log(("Server Is Running"));
})


