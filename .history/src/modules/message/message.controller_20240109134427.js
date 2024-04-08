

export const sendMessage = async (req , res)=>{
try {
     const{}= req.body
} catch (error) {
    res.json({ msg: "Cath Error", error })
}
}