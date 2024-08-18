const express=require('express')
const app=express();
const dbconnect=require('./database/config')
const userroute=require("./routes/userroute")

app.use(express.json());


/////////////////////////////////

app.use("/api/user",userroute)




////////////////////////////////////


app.listen(5000,()=>{
    console.log("server connect")
})



dbconnect.connect();