const express= require('express')
const app=express();

const bodyParsar= require('body-parser');
// -specifcally parse json data-----------
app.use(bodyParsar.json())      //use in POST or PUT

app.listen(3000,()=>
{
    console.log("-------------server started--------")
})


// ------------------get request---------------------
app.get('/',(req,res)=>{
    res.send("get request send ")
})


// -----------------------post request-----------------------
// -------------send data by postman-----------------
app.post('/api/cars',(req,res)=>{
const {name,brand}=req.body;
console.log(name);
console.log(brand);
res.send("car submitted succesfully");
})

const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost:27017/cars')
.then(()=>{console.log("--------connection succesful---------")})
.catch((error)=>{console.log("receve an error in db connection")})