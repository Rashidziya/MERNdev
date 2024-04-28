const express=require('express');
const app=express();
const port=5000;
app.use(express.json());
const zod=require("zod");
const schema=zod.number();
function usernamemiddleware(req,res,next){
    const name=req.headers['name'];
    const email=req.headers['mail'];
    if(name!="rashid" || email!="rashid@gmail.com"){
        res.status(403).json({
            msg:"username or email not authenticated "
        })
    }else{
        next();
    }
}

function useridmiddleware(req,res,next){
    const Id=req.body.Id;
    const response=schema.safeParse(Id);
    if(response.success){
        if(Id==748803){
            next();
        }else{
            res.json({msg:"Id isn't authenticated !"})
        }
    }else{
        response
    }
  
}

app.post('/check-up',usernamemiddleware,useridmiddleware,function(req,res){
    // do some logic here 
    res.send("Data is authenticated welcome to facebook!");
})

// Global catches (catches) the error thrown by any middleware 
// it is error handling middleware
app.use(function(err,req,res,next){
    res.json({
        msg:"something is up with the input !"
    })
})

app.listen(port);

// middleware resides between the actual logic and the request sent by the User
// its task is to authenticate the data sent by the user that is it matches with 
// the database . for example if a user wants to sign-in in facebook then the
// middleware in this case authenticate the user are they exist if yes then 
// only it lets user to use the actual logic .in this case it lets user to 
// use the facebook application.