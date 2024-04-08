import { Router } from "express";
import { deleteprofile, signIn, signUp, update  , shareProfile} from "./user.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router();
router.use(auth)
router.post("/signup", signUp )
router.post("/signin", signIn )
router.put("/update", update )
router.delete("/deleteprofile", deleteprofile )
router.get("/shareprofile/:id", shareProfile )



export default router