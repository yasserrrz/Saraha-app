import express from 'express'
import DBconnection from './DB/connection'
const app = express()
const port = 3000

Bconnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))