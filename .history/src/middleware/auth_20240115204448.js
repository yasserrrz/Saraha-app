
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.resolve('../../config/.env')})
export const auth = async(req , res , next)=>{
    let token = req.header('token')
    const privateKey = process.env.PRIVATE_KEY
    jwt.verify(token , privateKey , async(error , decode)=>{
         if(error){
            // return res.json({msg:"You are not authorized, Please try re logging in"})
            next
         }
         req.user = decode;
         next();
    } )
}