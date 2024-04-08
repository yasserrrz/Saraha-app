import { Router } from "express";
import { sendMessage } from "./message.controller.js";

const router = Router();

router.post('/sendMsg' , sendMessage)
router.delete('/deleteMsg')

export default router