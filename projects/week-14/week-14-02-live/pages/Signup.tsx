"use client"
// Signup Component for the frontend.
// Simply have to return Signup page.

import axios from "axios"
import { Button } from "./Button"
import { Lableinput } from "./Labelinput"
import { useState } from "react";
import { useRouter } from "next/navigation";
interface usersType{
    name:string;
    email:string;
    password:string;
}
export const Signup =()=>{
    const router=useRouter();
    const [user,setUser]=useState<usersType>({
        name:'',
        email:'',
        password:''
    })
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center ">
            <div className="flex flex-col justify-center max-w-md px-8 py-12 shadow shadow-slate-300">
                <div className="flex flex-col items-center font-extrabold text-3xl gap-2 mb-4">
                    <h2>Create An Account</h2>
                    <p className="text-center font-normal text-sm text-slate-500 ">Already have an account ?
                    <span className="ml-2 underline cursor-pointer">Signin</span>
                    </p>
                </div>
                <Lableinput onChange={(e)=>{
                    setUser({
                        ...user,
                        name:e.target.value
                    })
                }} lable="name" placeholder="Enter your name" />
                <Lableinput onChange={(e)=>{
                    setUser({
                        ...user,
                        email:e.target.value
                    })
                }}lable="Email" placeholder="JhonDoe@gmail.com"/>
                <Lableinput onChange={(e)=>{
                    setUser({
                        ...user,
                        password:e.target.value
                    })
                }} lable="password" placeholder="123456"/>
                <Button name="signup" onClick={async ()=>{
                    try{
                        const res=await axios.post("http://localhost:3000/api/user/",user)
                        router.push('/')
                    }catch(e){
                        console.log(e);
                    }
                }}/>
            </div>
        </div>
    </div>
}