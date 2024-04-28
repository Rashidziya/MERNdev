import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

interface updateParams{
    firstName:string,
    lastName:string,
    password?:string
}
async function updateUser(username:string,{
    firstName,
    lastName
}:updateParams){
    const res=await prisma.user.update({
        where:{email:username},
        data:{
            firstName,
            lastName
        }
    })
    console.log("user Updated",res);
}
// if not understanding then can do like this as well
// async function updateuser(username:string,usersvalue:updateparams){
//      rest of the logic to update the user in data:section and where : it will hold part by which the row will be selected to updation
//}

updateUser('user3@gmail.com',{
    firstName:'user33',
    lastName:'user33last'
});