const express=require('express');
const app=express();
const port=3000;

// we are using global middleware which will parse the data of the body into json
app.use(express.json());

// const validationMiddleware=(req,res,next)=>{
//     const kidney=req.body.kidney;
//     const kidneylength=kidney.length;
//     if(kidneylength<=2 && kidneylength>0){
//         next();
//     }
// }
app.post('/health-checkup',(req,res)=>{
    const kidney=req.body.kidney;
    const kidneylength=kidney.length;
    res.send("you have "+kidneylength+" kidneys");
})

// ----------------Global Catch----------------------------------------------------------
// any time there will be an exception in the post handler then this
// this middlewatre will be callled where we can hide the ugly looking 
// exception to be publicly seen by the user.at this place we can send some 
// specific info. to the user about the server distruption.
// express recongnize it as a error handling middleware
app.use((err,req,res,next)=>{
    res.json({
        msg:"Sorry Something is up with our server "
    })
})

app.listen(port,()=>{
    console.log("port is running at port number "+port);
})