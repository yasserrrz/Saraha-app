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
        const { id } = req.params;
        const message = await messageModel.findByIdAndDelete(id)
        if (!message) {
            return res.json({ msg: "Message is Not exist" })
        }
        return res.json({msg :"Message is deleted "})
    } catch (error) {
        res.json({ msg: "Cath Error", error })
    }
}

export const MarkeMassage = async (req , res)=>{
    try {
        const { id } = req.params;
        const { isViewed } = req.query;
        const message = await messageModel.findByIdAndUpdate(id , {isViewed:isViewed} , {new:true}) ; 
        if (!message) {
            return res.json({ msg: "Message is Not exist" })
        }
        return res.json({msg :"Done" , message})
    } catch (error) {
        res.json({ msg: "Cath Error", error })
    }
}

export const MarkeMassage = async (req , res)=>{
    try {
        const { id } = req.params;
        const { isViewed } = req.query;
        const message = await messageModel.findByIdAndUpdate(id , {isViewed:isViewed} , {new:true}) ; 
        if (!message) {
            return res.json({ msg: "Message is Not exist" })
        }
        return res.json({msg :"Done" , message})
    } catch (error) {
        res.json({ msg: "Cath Error", error })
    }
}