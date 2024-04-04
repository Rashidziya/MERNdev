import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

async function DeleteUsers(user_id:number){
    const deletedUser=await prisma.user.delete({
        where:{
            id:user_id
        }
    });
    console.log("User is Deleted ",deletedUser)
}

DeleteUsers(10).catch(console.error)