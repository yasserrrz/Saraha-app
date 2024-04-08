import { userModel } from "../../../DB/models/user.model.js"
import bcrypt from 'bcrypt'
import router from "./user.routes.js"
 
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
         const {name , email , password } = req.body

         const user = await userModel.findOne({
            $or:[{email : email} , {name : name?.toLowerCase()}]
         })
         if(!user){
            return res.json({msg:"User Is Not Exist"})
         }

         const checkPassword = bcrypt.compareSync(password , user.password)
      return checkPassword ? res.json({msg: "done" , user }) : res.json({msg: " email or password is not correct "}) 
    } catch (error) {
        res.json({msg:"Cath Error" , error})
    }

}

export const update =async (req , res)=>{
    try {
        const {name , email , password , gender , id}  = req.body

        const user = await userModel.findById(id)
        if(!user){
            res.json({msg :"User is Not exist"})
        }
        if(name){
            if(name.toLowerCase() === user.name){
               return  res.json({msg:"match with old nam"})
            }
        }
    } catch (error) {
        
    }
}