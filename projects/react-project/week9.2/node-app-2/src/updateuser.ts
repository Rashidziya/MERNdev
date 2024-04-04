import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

async function updateUser(lastname:string){
    const result=await prisma.user.updateMany({
        where:{
            lastName:'Ziya'
        },
        data:{
            // updated name with this name
            lastName:lastname
        }
    })
    console.log("User Updated ",result);
}

updateUser('Mohammad Ali');