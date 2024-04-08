import express from 'express'
import dBconnection from './DB/connection.js'
import bootstrap from './src/bootstrap.js'
import  dotenv from 'dotenv'
const app = express()
dotenv.config()
const port = P
bootstrap(app , express)
dBconnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))