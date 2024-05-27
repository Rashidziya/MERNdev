import { NextRequest, NextResponse } from "next/server";


export async function GET(){
    // DB call to fetch the data of username and the email who is signed in
    return Response.json({name:"RashidZiya",email:"ziya@gmail.com"});
}


export async function POST(req:NextRequest,res:NextResponse){
    const body=await req.json();
    return Response.json({
        name:body.name,
        email:body.email,
        password:body.password
    });
}