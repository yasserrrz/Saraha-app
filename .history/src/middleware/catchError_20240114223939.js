


export const catchError(fun)=>{
    return (req , res , next)=>{
        fun(req , res).catch((error)=>{
            res.json({error})
        })
    }
}