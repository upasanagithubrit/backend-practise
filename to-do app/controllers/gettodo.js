const todoSchema = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    
    const data=await todoSchema.find({});
    //send a json res witha successful flag
    res.json({
      status:'todo success',
      data:{
          user:data,
      }
  })
  } catch (error) {
    console.log(error);
    res.json({
        status:'failed',
        data:{
            user:error.message,
        }
    })
  }
};


exports.getTodobyid=async(req,res)=>
{


  try {
    const id=req.params.id;
 
    const result=await todoSchema.findById({_id:id})
    //send a json res witha successful flag
    res.json({
      status:'todo success by id',
      data:{
          user:result,
      }
  })
  } catch (error) {
    console.log(error);
    res.json({
        status:'failed',
        data:{
            user:error.message,
        }
    })
  }
}
