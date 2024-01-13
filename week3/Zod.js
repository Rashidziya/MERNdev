const express=require('express');
const app=express();
const port=2000;
const z=require('zod');
app.use(express.json());
// this basically lets us do the input validation against the schema defined 
// by the zod
const schema=z.array(z.number());

const userschema=z.object({
    name:z.string(),
    age:z.number(),
    email:z.string().email,
})



app.post('/health-check',(req,res)=>{
    const mykidney=req.body.kidney;
    const ans=schema.safeParse(mykidney);
    res.send({
        ans
    })
})

app.post('/user-check',(req,res)=>{
    // const input=req.body.userinput;
    const response=userschema.safeParse(req.body);
    if(!response.success){
        res.status(411).json({msg:"Input Invalid"})
    }
    else{
        res.send({
            response
        })
    }
})



app.listen(port,()=>{
    console.log("port is listening at port "+port);
});
