import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
import { string } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

interface extendRequest extends Request{
    userId?: number
}
export async function authUser(req:extendRequest,res:Response,next:NextFunction){
    // extract the header form authorization header and verify the user
    const token=req.headers.authorization;
    try{
        if(token && token.startsWith('Bearer')){
            const realToken=token.split(' ')[1];
            const decodedToken=jwt.verify(realToken,process.env.JWT_SECRET as string) as {userId:number};
            if(!decodedToken){
                return res.status(411).send({
                    message:'Invalid Token '
                });
            }
            const user = await prisma.user2.findUnique({
                where: {
                    id: decodedToken.userId,
                },
            });
    
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
    
            req.userId = user.id; // Assign user.id (type: number) to req.userId
            next();
        }

    }catch(err){
        res.status(411).send({
            message:'Something is up with Authenctication '
        })
    }

}