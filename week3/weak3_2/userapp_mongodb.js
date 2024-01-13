const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const jwtpassword="1234567";
const app=express();
const port=3600;
app.use(express.json());
mongoose.connect("mongodb+srv://Rashid_ziya:Rashidziya@firstmongocluster.cvtu1hx.mongodb.net/usernewapp",{
    connectTimeoutMS: 15000
});
const User=mongoose.model("Users",{name:String,email:String,password:String});

// this will take username , name ,password and store in db if not exist.
app.post("/signup",async function(req,res){
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

async function userMiddleware(req,res,next){
    const email=req.body.email;
    const password=req.body.password;
    const flag=false;
    const user=await User.findOne({email});
    // const passexist=await User.findOne({password:userpassword});
    if(!user){
        res.status(401).json({Warning:"Invalid Email"});
    }
    if(password!=user.password){
        res.status(401).json({Warning:"Invalid Password"});
    }
    next();
}
// This will take username,name and password if it exist in db then return the jwt
app.post("/signin",userMiddleware,function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const token=jwt.sign({email,password},jwtpassword);
    res.json({
        token
    })
});

// This will take token as header input and will check if the user data is present in the 
// db then will return the user data.
app.get("/user",function(req,res){
    const token=req.headers['authorization'];
    const decoded=jwt.verify(token,jwtpassword);
    res.json({
        decoded
    }) 
});

// global cathces
app.use(function(err,req,res,next){
    res.status(401).send("Authentication Failed");
})
app.listen(port,()=>{
    console.log("port is open at "+port);
})