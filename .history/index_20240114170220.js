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
    res.json({msg:`Not Found End Point ${res}`})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))