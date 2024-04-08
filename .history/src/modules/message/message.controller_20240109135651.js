import { messageModel } from "../../../DB/models/message.model.js";
import { userModel } from "../../../DB/models/user.model.js";


export const sendMessage = async (req , res)=>{
try {
    const {  content ,sendTo } = req.body;
    const user = await userModel.findById(sendTo).select("name  email gender , picture")
    if (!user) {
        return res.json({ msg: "User is Not exist" })
    }
    const message =  messageModel({content , sendTo})
    const newMsg = await message.save()
    return res.json({msg :"done"  , newMsg})
} catch (error) {
    res.json({ msg: "Cath Error", error })
}
}




export const deleteMassage = async (req , res)=>{
    try {
        const { id } = req.body;
        const user = await userModel.findByIdAndDelete(id)
        if (!user) {
            return res.json({ msg: "Message is Not exist" })
        }
        return res.json({msg :" done "})
    } catch (error) {
        res.json({ msg: "Cath Error", error })
    }
}
