const express=require('express');
const app=express();
const port=30000;

app.use(express.json());

function usermiddleware(req,res,next){
    const username=req.headers['user'];
    const password=req.headers['pass'];
    if(username !="Rashidziya" || password !="123"){
        res.status(403).json({
            "msg":"Input Credentials are incorrect "
        })
    }else{
        next();
    }
}
function kidneymiddleware(req,res,next){
    const kidneyId=req.query.kidney;
    if(kidneyId !=1 && kidneyId != 2){
        res.status(403).json({
            "msg":"Input Credentials are incorrect "
        })
    }else{
        next();
    }
}
app.get('/checkup',usermiddleware,kidneymiddleware,(req,res)=>{
    // Do some logic with the input and give response
    res.json({
        "msg":"Your kidney's Health is Fine !"
    })
});
app.get('/Kidney',kidneymiddleware,(req,res)=>{
    res.json({"msg":"your Kidney is fine!"})
})
app.listen(port,function(){
    console.log("Port number is listening at ${port}")
})