const express=require('express')
const router=express.Router();

const addtodo=require('../controllers/addTodo.js');
const gettodo=require('../controllers/gettodo.js')
const updatetodo=require('../controllers/updatetodo.js')
const deletetodo=require('../controllers/deletetodo.js')
//define api route
router.route('/')
.post(addtodo.addTodo)
.get(gettodo.getTodo)

router.route('/:id')
.get(gettodo.getTodobyid)
.put(updatetodo.updateTodo)
.delete(deletetodo.deleteTodo)

module.exports=router;
