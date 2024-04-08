



export const validation = (schema)=>{
    return(req , res , next)=>{
        const {error} = signUpSchemaValidation.validate(req.body)
        if(!error){
    }
}