// create two end points 
// 1.> POST (signin) where the user will try to signin at this route 
// if the user data exist in the in memory database then return the token
// username with tokenize not  the password ..
//2.>   GET(check) request will have the token with it and will 
// check form the db that if this user exist or not 
// if exist returns all users except this user...

// for this we have to install jwt locally
const express=require("express");
const app=express();
const port=3000;
const jwt=require("jsonwebtoken");
const jwtpassword="123456";
app.use(express.json());

// defining in memory db
const users=[{
    username:"rashid@gmail.com",
    password:"123",
    name:"rashid"
},{
    username:"sajid@gmail.com",
    password:"456",
    name:"sajid"
},{
    username:"rashidziya@gmail.com",
    password:"12345",
    name:"rashidziya"
}];

function checkdb(username,password,name){
    let exist=false;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password && 
            users[i].name==name){
            exist=true;
        }
    }
    return exist;
}
//POST request where user will send username and password which we 
// match with db and return token if it exist.
app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;
    const response=checkdb(username,password,name);
    if(!response){
        res.json({
            msg:"Sorry user does not Exist Please signup first !"
        })
    }else{
        const token=jwt.sign(username,jwtpassword);
        res.json({
            token
        })
    }
})


// Now implementing the 2nd part..
// where a user with token tries to see if it exist in the db

app.get("/user-check",(req,res)=>{
    const input_token=req.headers['authorization'];
    const decoded=jwt.verify(input_token,jwtpassword);
    const name=decoded.name;
    const username=decoded.username;
    res.json({
        decoded
    })

})

app.listen(port,()=>{
    console.log("Port is listening at "+port);
});


