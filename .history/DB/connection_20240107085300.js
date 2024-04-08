import mongoose  from "mongoose";

 const connection = async()=>{
    return await mongoose.connect(`mongodb://localhost:27017/saraha`).then(()=>{
        console.log()
    })
 } 



 export default connection