
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';

export const fileUpload = () => {
    const fileFilter = (req, file, cb) => {
        console.log(file)
        if (file.mimetype.startsWith('image')) {
            cb(null, true)
        } else {
            cb(new AppError("Accept Images Only", 401), false)
        }
    }
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/')
        },
        filename: (req, file, cb) => {
            cb(null, uuidv4() + "_" + file.originalname)
        }
    })
    const upload = multer({ storage, fileFilter })
    return upload.single(field)
}