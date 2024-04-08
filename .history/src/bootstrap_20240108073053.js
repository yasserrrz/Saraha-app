// import { Router } from "express"

import { json } from "express"

// const router = Router()
const bootstrap = (app ,express ) => {
        
    app.use(json)
}