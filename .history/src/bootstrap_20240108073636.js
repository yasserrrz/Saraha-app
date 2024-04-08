// import { Router } from "express"
// const router = Router()
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
    app.use('/user' , userRoutes)
}

export default bootstrap;