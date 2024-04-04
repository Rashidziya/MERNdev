import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

interface Todos{
    title:string,
    description:string,
    done:boolean
}
async function insertTodo(userId:number,{title,description,done}:Todos){
    const response=await prisma.todo.create({
        data:{
            user_id:userId,
            title:title,
            description:description,
            done:done
        },
        select:{
            user_id:true,
            done:true,
            title:true
        }
    });
    console.log("Todo Created ",response);
}

insertTodo(5,{
    title:'Study Hard',
    description:'Hard work as well as Smart Work is necessery to Succeed',
    done:true
}).catch(console.error);