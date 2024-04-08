import userRoutes from './modules/user/user.routes.js'
import messageRoutes from './modules/message/message.routes.js'
import { AppError } from './utils/appError.js'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
const bootstrap = (app ,express ) => {
        
   
  
    const storage = multer.diskStorage({
        destination:  (req, file, cb)=> {
          cb(null, 'uploads/')
        },
        filename:  (req, file, cb)=> {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, uuidv4() + "_"+ file.originalname)
        }
      })
      
      const upload = multer({ storage: storage })
     app.post("/addPhoto" , upload.single("img") , (req , res)=>{
        res.json({msg:"success"})
     })


     app.use(express.json())
     app.use('/user' , userRoutes)
     app.use('/message' , messageRoutes)
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