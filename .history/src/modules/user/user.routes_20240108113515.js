import { Router } from "express";
import { signIn, signUp } from "./user.controller.js";

const router = Router();

router.post("/signup", signUp )
router.post("/signin", signIn )

export default router