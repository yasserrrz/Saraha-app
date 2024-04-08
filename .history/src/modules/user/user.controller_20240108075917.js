import { userModel } from "../../../DB/models/user.model"


export const signUp = async(req , res , next)=>{
    try {
         const {name , email , password , gender} = req.body

         const exist = await userModel.findOne({
            $or:
         })
    } catch (error) {
        
    }

}