
const { json } = require("body-parser");
const express=require("express");
const app=express();
const port=3010;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello World");
})
app.get('/body-checkup',(req,res)=>{
  
  const username=req.header.user;
  const password=req.header.pass;
  const kidneyId=req.query.kidneyid;
// Authentication checks
  if(username!="Rashid" || password!="Ziya123"){
    res.status(400).json({
      "msg":"Invalid Credentials please make correction"
    })
    return 
  }

  // input validation checks
  if(kidneyId!=1 && kidneyId!=2){
    res.status(400).json({
      "msg":"invalid kidney id"
    })
    return
  }
  
  res.json({
    "msg":"your kidneyId is fine!"
  })
});

app.listen(port,()=>{
  console.log("server is running at port 3000");
});