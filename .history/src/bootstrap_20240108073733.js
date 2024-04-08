import userRoutes from './modules/user/user.routes.js'
import messageRoutes from './modules/message/message.routes.js'
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
    app.use('/user' , userRoutes)
}

export default bootstrap;