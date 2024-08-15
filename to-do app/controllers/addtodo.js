const todoSchema = require("../models/todo");

exports.addTodo = async (req, res) => {
  try {
    //extract data form request ki body
    const { title, description } = req.body;

    //create kar diya new todo object and insert in db

    const response = await todoSchema.create({ title, description });

    //send a json res witha successful flag
    res.json({
      status:'todo success',
      data:{
          user:response,
      }
  })
  } catch (error) {
    console.log(error);
    res.json({
        status:'failed',
        data:{
            user:"not done",
        }
    })
  }
};

