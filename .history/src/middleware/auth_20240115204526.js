
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import path from 'path'
import { AppError } from '../utils/appError';

dotenv.config({path:path.resolve('../../config/.env')})
export const auth = async(req , res , next)=>{
    let token = req.header('token')
    const privateKey = process.env.PRIVATE_KEY
    jwt.verify(token , privateKey , async(error , decode)=>{
         if(error){
            // return res.json({msg:"You are not authorized, Please try re logging in"})
            next(new AppError("You are not authorized, Please try re logging in" , 401))
         }
         req.user = decode;
         next();
    } )
}