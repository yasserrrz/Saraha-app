import express from 'express'
import dBconnection from './DB/connection.js'
import bootstrap from './src/bootstrap.js'
import  dotenv from 'dotenv'
import path from 'path'
const app = express()
dotenv.config({path:path.resolve('config/.env')})
const port = process.env.PORT || 3001
bootstrap(app , express)
dBconnection()

app.use("*" , (req , res , next)=>{
   next (new Error(`Not Found End Point ${req.originalUrl}`))
})
app.use((error , req , res, next)=>{
    res.js
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))