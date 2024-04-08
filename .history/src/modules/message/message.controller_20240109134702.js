import { messageModel } from "../../../DB/models/message.model";
import { userModel } from "../../../DB/models/user.model";


export const sendMessage = async (req , res)=>{
try {
    const { isViewed ,content ,sendTo } = req.body;
    const user = await userModel.findById(sendTo).select("name  email gender , picture")
    if (!user) {
        return res.json({ msg: "User is Not exist" })
    }
    const message = await messageModel
    return res.json({msg :"done" })
} catch (error) {
    res.json({ msg: "Cath Error", error })
}
}