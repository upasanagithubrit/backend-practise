const mongoose=require('mongoose');

//route handler
const commentSchema=new mongoose.Schema({
   blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }

})


//export
module.exports=mongoose.model("Comment",commentSchema);
