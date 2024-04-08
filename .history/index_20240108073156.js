import express from 'express'
import dBconnection from './DB/connection.js'
import bootstrap from './src/bootstrap.js'
const app = express()
const port = 3000
bootstrap(a)
dBconnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))