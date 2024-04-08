process.on("uncaughtException" , (error)=>{
    console.log("error" , error)
})

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

process.on('')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))