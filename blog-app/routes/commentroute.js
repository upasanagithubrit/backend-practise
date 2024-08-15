const express=require('express');
const router=express.Router();

const commentcontroller=require('../controllers/commentcontroller')

router.post("/create",commentcontroller.createComment)

module.exports=router;