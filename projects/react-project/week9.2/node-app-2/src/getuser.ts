import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

async function getUser(lastname:string){
    const user=await prisma.user.findMany({
        where:{
            lastName:lastname
        },
        select:{
            firstName:true,
            lastName:true,
            id:true,
            username:true
        }
    });
    console.log("User Found with same lastName's : ",user);
}

getUser('Mohammad Ali');