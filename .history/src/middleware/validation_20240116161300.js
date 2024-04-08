



export const validation = (schema)=>{
    return(req , res , next)=>{
        const {error} = s.validate(req.body)
        if(!error){
    }
}