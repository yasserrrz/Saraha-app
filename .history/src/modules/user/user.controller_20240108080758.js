import { userModel } from "../../../DB/models/user.model"


export const signUp = async(req , res , next)=>{
    try {
         const {name , email , password , gender} = req.body

         const exist = await userModel.findOne({
            $or:[{email : email} , {name , name}]
         })
         if(exist){
            return res.json({msg:"User allready exist"})
         }
         await userModel 
    } catch (error) {
        
    }

}