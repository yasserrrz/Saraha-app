import { Router } from "express";
import { deleteprofile, signIn, signUp, update  , shareProfile} from "./user.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router();
router.post("/signup", signUp )
router.get('/verify/:email', verify)
router.use(auth)
router.post("/signin", signIn )
router.put("/update", update )
router.delete("/deleteprofile", deleteprofile )
router.get("/shareprofile/:id", shareProfile )



export default router