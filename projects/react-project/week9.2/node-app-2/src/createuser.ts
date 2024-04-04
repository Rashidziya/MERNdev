import { PrismaClient } from "@prisma/client";
const client=new PrismaClient();

interface User{
    firstName:string,
    lastName:string,
    password:string,
    email:string
}
async function CreateUserTable({
    firstName,
    lastName,
    password,
    email
}:User){
    const res=await client.user.create({
        data:{
            firstName:firstName,
            lastName:lastName,
            password:password,
            username:email
        },
        select:{
            id:true,
            username:true,
        }
    });
    console.log("User Info Inserted Sucessfully",res);
}

CreateUserTable({
    firstName:"Anas",
    lastName:"Ziya",
    password:"@123",
    email:"Anas@gmail.com"
});


// ziya@,Rashid@,Reyaz,Sajid@,Azhar@,Shamim@,Azhan@,Arham@,Zaira@,Anas@  (userEmail's)