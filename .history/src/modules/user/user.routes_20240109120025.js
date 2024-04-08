import { Router } from "express";
import { deleteprofile, signIn, signUp, update } from "./user.controller.js";

const router = Router();

router.post("/signup", signUp )
router.post("/signin", signIn )
router.put("/update", update )
router.delete("/deleteprofile", deleteprofile )
router.get("/", deleteprofile )

export default router