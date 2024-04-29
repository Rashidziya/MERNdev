import express from "express";
import {number, string, z} from 'zod';

const app= express();
// zod schema for checking user is sending the right type 
const userSchema=z.object({
    name:z.string().min(1,{message:'name cannot be Empty '}),
    email:z.string().email({message:'Email should be correct'}),
    password:z.number().min(8,{message:'password should not be less than 8 digit'}).optional()
});

// type userProfile=z.infer<typeof userSchema>

app.put('update',(req,res)=>{
    const {success}=userSchema.safeParse(req.body);
    const updateUser:z.infer<typeof userSchema>=req.body;
    if(!success){
        return res.status(411).json({
            message:""
        })
    }
    // update user in DB here
    res.json({
        message:"user updated",
    })
})
app.listen(3000);