import { userModel } from "../../../DB/models/user.model.js"
import bcrypt from 'bcrypt'
import router from "./user.routes.js"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import path from 'path'
import { sendEmail } from "../../email/sendEmail.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/appError.js";
import { signUpSchemaValidation } from "./user.validation.js";

dotenv.config({ path: path.resolve('../../../config/.env') })


export const signUp = catchError(async (req, res, next) => {
    // try {
  const {error} = signUpSchemaValidation.validate(req.body)
  if(!error){
    //>>>
  }
    const { name, email, password, gender , age} = req.body
    
    const exist = await userModel.findOne({
        $or: [{ email: email }, { name: name.toLowerCase() }]
    })

    if (exist) {
        // return res.json({ msg: "User allready exist" })
        next(new AppError("User allready exist" , 409))
    }
    sendEmail(email, name)

    const hashPassword = bcrypt.hashSync(password, 8);
    const user = userModel({ name, email, password: hashPassword, gender })
    const newUser = await user.save()
    return newUser ? res.json({ msg: "done", newUser }) : res.json({ msg: "Faild " })
   

})


export const verify =catchError( async (req, res , next) => {
    const { token } = req.params
    const privateKey = process.env.PRIVATE_KEY
    jwt.verify(token, privateKey, async (error, decode) => {
        if (error){
            // return res.json({ msg: "somthing went wrong", error })
            next(new AppError("somthing went wrong" , 406))
            
        }

        await userModel.findOneAndUpdate({ email: decode }, { confirmed: true })
        res.json({ msg: "Email Verified" })

    })
})
export const signIn = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        const user = await userModel.findOne({
            $or: [{ email: email }, { name: name?.toLowerCase() }]
        })
        console.log("User found:", user);
        if (!user) {
            return res.json({ msg: "User Is Not Exist" })
        }
        const privateKey = process.env.PRIVATE_KEY
        const checkPassword = bcrypt.compareSync(password, user.password)
        console.log("Password comparison result:", checkPassword);
        const token = jwt.sign({ userId: user._id }, privateKey)
        console.log("Generated token:", token);
        return checkPassword ? res.json({ msg: "done", token }) : res.json({ msg: " email or password is not correct " })
    } catch (error) {
        // res.json({ msg: "Cath Error", error })
        console.error("Error during sign-in:", error);
        res.status(500).json({ msg: "Internal server error during sign-in" });

    }

}

export const update = async (req, res) => {
    try {
        const { name, email, password, gender, id } = req.body

        const user = await userModel.findById(id)
        if (!user) {
            return res.json({ msg: "User is Not exist" })
        }
        if (name) {
            if (name.toLowerCase() === user.name) {
                return res.json({ msg: "match with old name" })
            }
            if (await userModel.findOne({ name: name.toLowerCase() })) {
                return res.json({ msg: "name allredy exist" })
            }
            user.name = name.toLowerCase();
        }
        if (gender) {
            user.gender = gender;
        }
        if (email) {
            if (await userModel.findOne({ email: email })) {
                return res.json({ msg: "email allredy exist" })
            }
            user.email = email
        }
        await user.save()
        return res.json({ msg: "done", user })

    } catch (error) {
        res.json({ msg: "Cath Error", error })
    }
}

export const deleteprofile = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await userModel.findByIdAndDelete(id)
        if (!user) {
            return res.json({ msg: "User is Not exist" })
        }
        return res.json({ msg: "done" })
    } catch (error) {
        res.json({ msg: "Cath Error", error })
    }
}

export const shareProfile = async (req, res) => {
    try {

        const { id } = req.params;
        const user = await userModel.findById(id).select("name  email gender , picture")
        if (!user) {
            return res.json({ msg: "User is Not exist" })
        }
        return res.json({ msg: "done", user })
    } catch (error) {
        res.json({ msg: "Cath Error", error })
    }
}