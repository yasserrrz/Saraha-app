import userRoutes from './modules/user/user.routes.js'
import messageRoutes from './modules/message/message.routes.js'
import { AppError } from './utils/appError.js'

import { photosModel } from '../DB/models/photo.model.js';
import { auth } from './middleware/auth.js';
import { uploadSingleFile } from './uploadSingleFile/fileUpload.js';
const bootstrap = (app, express) => {

   
    app.use("/",express.static('uploads'))

    app.post("/uploadPhoto", uploadSingleFile("img"), async(req, res) => {
        console.log(req.file)
        await photosModel.insertMany({title:req.body.title , img:req.file.filename})
        res.json({ msg: "success" })
    })

    app.get("/photos" ,async(req, res) => {
      const photos =   await photosModel.find()
        res.json({ msg: "success" , photos })
    })

    app.use(express.json())
    app.use('/user', userRoutes)
    app.use('/message', messageRoutes)
    app.use("*", (req, res, next) => {
        console.log(`Wildcard Route - ${req.method} ${req.originalUrl}`);
        next(new AppError(`Not Found End Point ${req.originalUrl}`, 404));
    });


    let mood = "dev"

    app.use((error, req, res, next) => {
        console.error(error); // Log the error for debugging purposes
        error.statusCode = error.statusCode || 500;
        if (mood === "dev") {
            res.status(error.statusCode).json({ error: error.message, stack: error.stack });
        } else {
            res.status(error.statusCode).json({ error: error.message });
        }
    });
}

export default bootstrap;