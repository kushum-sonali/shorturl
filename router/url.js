const express=require("express");
const {handlegetshorturl}=require("../controller/url");

const router= express.Router();
router.post("/",handlegetshorturl);

module.exports=router;