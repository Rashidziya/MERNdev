import axios from "axios";
// import { PrismaClient } from "@prisma/client";
// const prisma=new PrismaClient();
import prisma from "@/db";


const fethData=async ()=>{
  // // artificial delay here to 
  // await new Promise((r)=>setTimeout(r,5000))
  // const response=await axios.get('http://localhost:3000/api/user');
  // const data =response.data.user;
  // return data;

  const res=await prisma.user.findMany({});
  return res;
}

export default async function Home() {
  const userData=await fethData();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {userData.map((user) => (
        <div className="border p-8 rounded mt-2 w-1/3">
          <div>Name: {user?.name}</div>
          <div>Email: {user?.email}</div>
        </div>
      ))}
    </div>
  );
}
