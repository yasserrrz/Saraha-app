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
       const user =   await userModel( {name , email , password , gender}) 
    } catch (error) {
        
    }

}