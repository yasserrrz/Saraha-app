// import { Router } from "express"
// const router = Router()
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
}

export default bootstrap;