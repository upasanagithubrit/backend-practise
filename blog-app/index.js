const express= require('express');
const app=express();
const blogrouter=require('./routes/blogroute.js')
const likerouter=require('./routes/likerouter.js')
const commentrouter=require('./routes/commentroute.js')
app.use(express.json());

app.use("/api/like",likerouter);
app.use("/api/comment",commentrouter);
app.use("/api/blog",blogrouter);


app.listen(4000,()=>{
    console.log("server  connected")
})

const dbconnect=require('./config/database.js')
dbconnect();

