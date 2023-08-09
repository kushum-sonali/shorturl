const URL= require("../models/url");
// const Shortid=require("shortid");
// const {nanoid}=require("nanoid");
// const { nanoid }= require('nanoid')
const uuid = require('uuid');
require("../config");
async function handlegetshorturl(req,res){
const {url} = req.body;
if(!url)return res.status(400).json({error:"Url is required"});
const nanoid = uuid.v4();
const urlToSave = new URL({
    shortId: nanoid,
    redirectUrl : url,
    visitHistory:[]
})
const saved = await urlToSave.save();

// const result =await  urluser.save);
return res.json(saved)
}
module.exports={
    handlegetshorturl
}