const likeSchema=require('../models/likemodel')
const blogSchema=require("../models/blogmodel")

exports.dummyLink=(req,res)=>
{
    res.send("this is dummy page")
};

exports.createlike= async(req,res)=>{
    try{
        const {blog,user}=req.body;
        const like=new likeSchema({
            blog,user
        })

        const savedlike=await like.save();

        const updatedlike = await blogSchema
      .findByIdAndUpdate(
        blog,
        { $push: { likes: savedlike._id } },
        { new: true }
      )
      .populate("likes")
      .exec();


        res.json({
            like:updatedlike,
            status:"like added"
        })


    }
    catch(error){
        res.json({
            like:null,
            status:"like failed"
        })

    }
}

//------------------------------------------------------------------


exports.deletelike=async(req,res)=>
{
    try{
        const {blog,like}=req.body;
       
        const unsavedlike=await likeSchema.findOneAndDelete({blog:blog,_id:like});

        //update blog likes
        const updatedlike = await blogSchema
      .findByIdAndDelete(
        blog,
        { $pull: { likes: unsavedlike._id } },
        { new: true }
      )
      


      res.json({
        blog:"done",
        status:"removed like successfully"
      })


    }
    catch(error)
    {
        res.json({
            blog:null,
            status:"removed like failed"
          })
    

    }
}