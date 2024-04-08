import userRoutes from './modules/user/user.routes.js'
import messageRoutes from './modules/message/message.routes.js'
import { AppError } from './utils/appError.js'
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
    app.use('/user' , userRoutes)
    app.use('/message' , messageRoutes)

 


     app.use("*", (req, res, next) => {
        console.log(`Wildcard Route - ${req.method} ${req.originalUrl}`);
        next(new AppError(`Not Found End Point ${req.originalUrl}` , 404));
    });
    
    app.use((error, req, res, next) => {
        console.error(error); // Log the error for debugging purposes
        res.status(error.statusCode).json({ error: error.message });
    });
}

export default bootstrap;