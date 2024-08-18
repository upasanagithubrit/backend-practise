const mongoose=require('mongoose');

require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.db_url)

.then(()=>{
    console.log("databse connected")
})
.catch((error)=>{
    console.log("error in db connect")
console.error(error)
process.exit(1)
})
}