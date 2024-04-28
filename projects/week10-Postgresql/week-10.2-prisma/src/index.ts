import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

async function insertIntoUser(username:string,password:string,firstName:string,lastName:string){
    const res=await prisma.user.create({
        data:{
            email:username,
            password,
            firstName,
            lastName
        }, 
        select:{
            firstName:true,
            id:true,
        }
    })
    console.log("inserted Sucessfully ",res);
}

insertIntoUser('user3@gmail.com','user3@123','user3','user3last');

