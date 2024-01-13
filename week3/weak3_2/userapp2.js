const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const jwtpassword="1234567";
const app=express();
const port=3500;
app.use(express.json());

mongoose.connect("mongodb+srv://Rashid_ziya:Rashidziya@firstmongocluster.cvtu1hx.mongodb.net/usernewapp2");
// shcema for database
const User=mongoose.model("Users",{name:String,email:String,password:String});

app.post("/singup",async function(req,res){
    const name=req.body.name;
    const username=req.body.username;
    const password=req.body.password;

    const existinguser=await User.findOne({email:username});
    if(existinguser){
        res.status(403).send("User ID Already Exist !");
    }else{
        const user=new User({
            name:name,
            email:username,
            password:password,
        });
        user.save();
        res.json({
            msg:"user ID is created"
        })
    } 
});

app.listen(port);