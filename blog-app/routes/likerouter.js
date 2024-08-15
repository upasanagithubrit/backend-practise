const express=require('express');
const router=express.Router();
const likecontroller=require('../controllers/likecontroller.js')




router.post("/create",likecontroller.createlike)
router.get("/dummyroute",likecontroller.dummyLink);
router.delete("/delete",likecontroller.deletelike)
module.exports=router;