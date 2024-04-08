import { Router } from "express";
import { deleteprofile, signIn, signUp, update  , shareProfile, verify} from "./user.controller.js";
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import { signInSchemaValidation, signUpSchemaValidation } from "./user.validation.js";

const router = Router();
router.post("/signup", validation(signUpSchemaValidation) , signUp )
router.get('/verify/:token', verify)
router.post("/signin", validation(signInSchemaValidation),signIn )
// router.use(auth)
router.put("/update",validation(pa)  ,auth,update )
router.delete("/deleteprofile", deleteprofile )
router.get("/shareprofile/:id" , shareProfile )



export default router