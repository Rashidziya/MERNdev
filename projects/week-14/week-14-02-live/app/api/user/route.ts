import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(){
    // DB call to fetch the data of username and the email who is signed in
    const user=await prisma.user.findMany();
    return Response.json({
        user
    })
}


export async function POST(req:NextRequest,res:NextResponse){
    const body=await req.json();
    try{
        const user= await prisma.user.create({
            data:{
                name:body.name,
                email:body.email,
                password:body.password
            }
        })
        console.log(user.id)
        return Response.json({
            message:'You are logged in',
            User:user
        });
    }catch(err){
        console.log(err);
    }
}