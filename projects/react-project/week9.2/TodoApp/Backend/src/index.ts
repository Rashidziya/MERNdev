import { PrismaClient } from '@prisma/client';
import express, { Application,Request,Response } from 'express';
import { User ,Todo,UserSchema,TodoSchema} from './zodValidation/types';
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken';
import { existsSync } from 'fs';
require('dotenv').config();
const app:Application=express();
import { authUser } from './middleware/authUser';
app.use(bodyParser.json());

const port =process.env.PORT;
const prisma=new PrismaClient();

app.post('/user/signup',async (req:Request,res:Response)=>{
    const validateUser=req.body;
    // Validate the input type using zod
    const validationresult=UserSchema.safeParse(validateUser);
    try{
        if(validationresult.success){
            const validUser:User=validationresult.data;
            // Check if user already exist in the DB
            const existingUser=await prisma.user2.findFirst({
                where:{
                    username:validUser.username
                }
            })
            if(existingUser){
                throw new Error('username already exist ! ');
            }
            // if user does not exist let him signup
            const newUser=await prisma.user2.create({
                data:{
                    username:validUser.username,
                    firstName:validUser.firstName,
                    lastName:validUser.lastName,
                    password:validUser.password
                }
            });
            const userId=newUser.id;
            const token=jwt.sign({userId},process.env.JWT_SECRET as string);
            return res.json({
                message:"user is Created",
                User:newUser,
                Token:token
            })
        }
    }catch(e){
        res.status(411).json({
            Error:e
        })
    }
});

app.post('/user/put_todo',authUser,async(req:Request,res:Response)=>{
    // Atuhentciate the user only valid users can put todos (authMiddleware)
    const userId=(req as any).userId;
    // validate the input coming for creating Todo using zod library
    const validatedTodos=TodoSchema.safeParse(req.body);
    if(!validatedTodos.success){
        return res.status(411).json({
            message:'Incorrect input '
        });
    }
    try{
        const newTodo=await prisma.todo2.create({
            data:{
                title:req.body.title,
                description:req.body.description,
                userid:userId
            }
        });
        res.send({
            Todo:newTodo
        })
    }catch(err){
        console.error(err);
    }
})


app.get('/user/fetch-todo',authUser,async(req:Request,res:Response)=>{
    const userId=(req as any).userId;
    // fetch the data base with this userid and list all the todos
    const Todos=await prisma.todo2.findMany({
        where:{
            userid:userId
        }
    });
    res.json({
        allTodos:Todos
    })
})

app.listen(port,()=>{
    console.log(`Sever is listening at : ${port}`);
})