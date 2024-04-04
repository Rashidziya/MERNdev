import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

// function to find all the todos of the user by userId
async function getTodos(userId:number){
    const res=await prisma.todo.findMany({
        where:{
            user_id:userId
        }
    });
    console.log("Todo Found for The given userId ",res);
}

getTodos(1).catch(console.error);