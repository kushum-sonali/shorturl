const mongoose=require("mongoose");
 mongoose.connect("mongodb://0.0.0.0/url",{
    }).then(()=>{
        console.log("connection is successful");
    }
    
    ).catch((e)=>{
        console.log(e);
    }
    );


