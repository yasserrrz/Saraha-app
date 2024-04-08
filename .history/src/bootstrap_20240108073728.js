import userRoutes from './modules/user/user.routes.js'
import Routes from './modules//.routes.js'
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
    app.use('/user' , userRoutes)
}

export default bootstrap;