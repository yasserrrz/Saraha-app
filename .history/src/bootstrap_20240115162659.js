import userRoutes from './modules/user/user.routes.js'
import messageRoutes from './modules/message/message.routes.js'
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
    app.use('/user' , userRoutes)
    app.use('/message' , messageRoutes)

    app.use("" , (req , res , next)=>{
        next (new Error(`Not Found End Point ${req.originalUrl}`))
     })

     app.use((error , req , res, next)=>{
         res.json({error : error.msg})
     })
}

export default bootstrap;