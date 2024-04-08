import userRoutes from './modules/user/user.routes.js'
import messageRoutes from './modules/message/message.routes.js'
import { AppError } from './utils/appError.js'
import multer from 'multer'
const bootstrap = (app ,express ) => {
        
    app.use(express.json())
    app.use('/user' , userRoutes)
    app.use('/message' , messageRoutes)

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, file.fieldname + '-' + uniqueSuffix)
        }
      })
      
      const upload = multer({ storage: storage })
     app.post("pho")

     app.use("*", (req, res, next) => {
        console.log(`Wildcard Route - ${req.method} ${req.originalUrl}`);
        next(new AppError(`Not Found End Point ${req.originalUrl}` , 404));
    });


    let mood = "dev"
    
    app.use((error, req, res, next) => {
        console.error(error); // Log the error for debugging purposes
        error.statusCode =error.statusCode || 500 ;
        if(mood === "dev"){
            res.status(error.statusCode).json({ error: error.message , stack : error.stack });
        }else{
            res.status(error.statusCode).json({ error: error.message });
        }
    });
}

export default bootstrap;