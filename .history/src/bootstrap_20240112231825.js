import userRoutes from './modules/user/user.routes.js'
import messageRoutes from './modules/message/message.routes.js'
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
    app.use()
    app.use('/user' , userRoutes)
    app.use('/message' , messageRoutes)
}

export default bootstrap;