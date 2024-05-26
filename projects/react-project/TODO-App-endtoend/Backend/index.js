// write basic Express boiler plate code 
// with express.json() middleware

const express=require('express');
const app=express();
const  port=3000;
app.use(express.json());
const {createTodo,updateTodo}=require("./types");
const {Todos}=require("./db");
const cors=require("cors");
app.use(cors());

app.post('/creates',async (req,res)=>{
    const createPayload=req.body;
    const checkPayload=createTodo.safeParse(createPayload);
    
    if(!checkPayload.success){
        res.status(411).json({
            msg: "Something Wrong with the input ! Try Again"
        })
        return 
    }
    else{
        await Todos.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        })
        res.json({
            msg: "Todo Created Successfully"
        })
    }
    
})

app.get('/list-todo',async(req,res)=>{
    const todos=await Todos.find({});
    res.json({
        todos:todos,
    })
})

app.put('/completed',async(req,res)=>{
    const updatetodo=req.body;
    const parsedTodo=updateTodo.safeParse(updatetodo);
    if(!parsedTodo.success){
        res.status(411).json({
            msg: "Wrong input "
        })
        return 
    }else{
        await Todos.updateOne({
            _id:updatetodo.id
        },{
            completed:true,
        })
        res.json({
            msg: "Todo is Marked As Done !"
        })
    }
})
app.listen(port,function(){
    console.log("Server is listening at port "+ port);
});