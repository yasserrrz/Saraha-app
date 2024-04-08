import { messageModel } from "../../../DB/models/message.model";


export const sendMessage = async (req , res)=>{
try {
    const { id } = req.params;
    const user = await messageModel.findById(id).select("name  email gender , picture")
    if (!user) {
        return res.json({ msg: "User is Not exist" })
    }
    return res.json({msg :"done" , user})
} catch (error) {
    res.json({ msg: "Cath Error", error })
}
}