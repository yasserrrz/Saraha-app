



export const validation = (schema)=>{
    return(req , res , next)=>{
        const {error} = schema.validate(req.body)
        if(!error){
            
        }
    }
}