import mongoose  from "mongoose";

 const connection = async()=>{
    return await mongoose.connect()
 } 



 export default connection