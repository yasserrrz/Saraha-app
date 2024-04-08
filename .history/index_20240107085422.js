import express from 'express'
import connection from './DB/connection'
const app = express()
const port = 3000

connection
app.listen(port, () => console.log(`Example app listening on port ${port}!`))