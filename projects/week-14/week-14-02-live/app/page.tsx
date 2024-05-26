import axios from "axios";
import Image from "next/image";
import { resolve } from "path";
import { useState } from "react";


const fethData=async ()=>{
  // artificial delay here to 
  await new Promise((r)=>setTimeout(r,5000))
  const response=await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
  const data =response.data;
  return data;
}

export default async function Home() {
  const userData=await fethData();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userData?.name}
            </div>
            Email: {userData?.email}
        </div>
    </div>
</div>
  );
}
