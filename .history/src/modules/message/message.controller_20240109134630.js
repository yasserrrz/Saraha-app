import { userModel } from "../../../DB/models/user.model";


export const sendMessage = async (req , res)=>{
try {
    const { isViewed ,content ,sendTo } = req.body;
    const user = await userModel.findById(sendTo).select("name  email gender , picture")
    if (!user) {
        return res.json({ msg: "User is Not exist" })
    }
    
    return res.json({msg :"done" , user})
} catch (error) {
    res.json({ msg: "Cath Error", error })
}
}