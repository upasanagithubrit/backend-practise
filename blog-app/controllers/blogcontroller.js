const blogschema=require('../models/blogmodel')

exports.createblog=async(req,res)=>{
try{

    const {title,body}=req.body;
    const blog=new blogschema({
        title,body,
    })

    const savedblog=await blog.save();

    res.json({
        blog:savedblog,
        status:"blog created successfully"
    })



}
catch(error){
    res.json({
        blog:error,
        status:"blog created failed"
    })


}
}

////////////////////////////////////////////////////////////////////
exports.getblog=async(req,res)=>{
    try{
        // const data=await blogschema.find(); ///////only blog

        ///////////blog with like nd comments using populate////////
        const data=await blogschema.find()
        .populate("likes")
        .populate("comments")
        .exec();
      
      
      
        res.json({
        blog:data,
        status:"sucessfully fetched"
      })
  
    }
    catch(error){

        res.json({
            blog:null,
            status:"failed fetched"
          })
      
  
    }
  }