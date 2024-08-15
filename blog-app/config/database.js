const mongoose=require('mongoose');


require('dotenv').config();
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)

.then(()=>{console.log("databse connected")})
.catch((error)=>{
    console.log("errpr in connection of db")
    console.error(error.message)
    process.exit(1);    //like return 0
    // abnormal termination
})
}

module.exports= dbconnect;