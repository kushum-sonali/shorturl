const express= require('express');
const urlrouter=require("./router/url");
 require("./config");
const URL= require("./models/url");
// const shortid = require('shortid');  
const cors=require("cors");
const app=express();
app.use(express.json());
const port= 3000;
app.use(cors());
app.use("/url",urlrouter);


app.get("/:shortId",async(req,res)=>{
 const  shortId=req.params.shortId;
 console.log(shortId)
 const entry=await URL.findOneAndUpdate({
    shortId
 },{
    $push:{
        visitHistory:{
            timestamp:Date.now(),
        }
    }
 });
 console.log(entry)
    if(!entry){
        return res.status(404).send("not found")
    }
    //redirect to the original url in new tab
    if(entry.redirectUrl.startsWith("https")){
        return res.redirect(entry.redirectUrl);
    }
    else {
        return res.redirect(`https://${entry.redirectUrl}`)
    }
})
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})