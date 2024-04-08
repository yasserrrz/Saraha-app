


export const catchError = (fun)=>{
    return (req , res , next)=>{
        fun(req , res).catch((error)=>{
            console.log("catchError" , err)
          next(error)
        })
    }
}