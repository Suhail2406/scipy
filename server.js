
const express = require("express");
const mongoose = require("mongoose");
const signupValidation=require('./validation/signup')
const app = express();
const PORT= 5000;
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const userrouter=require('./router/user')
app.use('/User',userrouter)
const collegerouter=require('./router/Collegerouter')
app.use('/College',collegerouter)
const studentrouter=require('./router/router')
app.use('/student',studentrouter)
app.listen(PORT, function() {
    console.log(`app listen to port ${PORT}`)
});
// const data ={

//     firstName :"Sruthi",
//     lastName :"s",
//     email :"sruthi123@gmail.com",
//     password:"Esrr23"
//     }
    
//     console.log(signupValidation(data))
    
mongoose.connect(`mongodb+srv://ssuhail99:ssuhail99@cluster0.wzvewmi.mongodb.net/?retryWrites=true&w=majority`,{

})
.then(()=> console.log("mongoose connected"))
.catch((err) => console.log(err));