
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import path from 'path'

dotenv.config
export const auth = async(req , res , next)=>{
    let token = req.header('token')
    jwt.verify(token , )
}