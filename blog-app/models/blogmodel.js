const mongoose=require('mongoose');


//route handler
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        equired:true
    },
    body:{
        type:String,
        require:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
})


//export
module.exports=mongoose.model("Blog",blogSchema);