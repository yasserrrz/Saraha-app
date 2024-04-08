import { Router } from "express";
import { signIn, signUp, update } from "./user.controller.js";

const router = Router();

router.post("/signup", signUp )
router.post("/signin", signIn )
router.("/update", update )

export default router