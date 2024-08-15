const express=require('express')
const router=express.Router();
//imort controller

const  blogcontroller=require('../controllers/blogcontroller')






//mapping route
router.post("/create",blogcontroller.createblog);
router.get("/get",blogcontroller.getblog)

//exports
module.exports=router;