import { userModel } from "../../../DB/models/user.model.js"
import bcrypt from 'bcrypt'
 
export const signUp = async(req , res , next)=>{
    try {
         const {name , email , password , gender} = req.body

         const exist = await userModel.findOne({
            $or:[{email : email} , {name : name.toLowerCase()}]
         })
         if(exist){
            return res.json({msg:"User allready exist"})
         }
         const hashPassword = bcrypt.hashSync(password , 8);
       const user =  userModel({name , email , password : hashPassword , gender}) 
      const newUser =  await user.save()
      return newUser ? res.json({msg: "done" , newUser}) : res.json({msg: "Faild "}) 
    } catch (error) {
        res.json({msg:"Cath Error" , error})
    }

}



export const signIn = async(req , res , next)=>{
    try {
         const {name , email , password , gender} = req.body

         const exist = await userModel.findOne({
            $or:[{email : email} , {name : name.toLowerCase()}]
         })
         if(!exist){
            return res.json({msg:"User Is Not Exist"})
         }

         const checkPassword = bcrypt.compareSync(password , exist.password)
      
      const newUser =  await user.save()
      return newUser ? res.json({msg: "done" , newUser}) : res.json({msg: "Faild "}) 
    } catch (error) {
        res.json({msg:"Cath Error" , error})
    }

}