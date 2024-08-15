const todoSchema = require("../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    
    

    const reqid=req.params.id;
    const data={...req.body,reqid}
    const result=await todoSchema.findOneAndReplace({_id: reqid},data)
    //send a json res witha successful flag
    res.json({
      status:'todo success',
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
};
