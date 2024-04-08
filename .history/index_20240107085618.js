import express from 'express'
import dBconnection from './DB/connection.js'
const app = express()
const port = 3000

dBconnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))