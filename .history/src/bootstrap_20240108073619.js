// import { Router } from "express"
// const router = Router()
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
    app.use('/user' , user)
}

export default bootstrap;