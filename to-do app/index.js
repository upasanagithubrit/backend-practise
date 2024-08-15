const express=require('express');
const app=express();

// require('dotenv').config();
// const PORT = process.env.PORT ||5000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo api
const router=require("./routes/todoroute.js");

//mount the todo api routes
app.use('/api/v1',router)

//start server
app.listen(4000,()=>{
    console.log("-------server is running ---------")
})

//connect to db
const dbconnect=require('./config/database.js')
dbconnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>this is home page</h1>`)
})