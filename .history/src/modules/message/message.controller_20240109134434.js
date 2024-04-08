

export const sendMessage = async (req , res)=>{
try {
    const { id } = req.params;
    const user = await userModel.findById(id).select("name  email gender , picture")
    if (!user) {
        return res.json({ msg: "User is Not exist" })
    }
    return res.json({msg :"done" , user})
} catch (error) {
    res.json({ msg: "Cath Error", error })
}
}