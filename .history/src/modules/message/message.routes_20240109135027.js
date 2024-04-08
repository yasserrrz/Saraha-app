import { Router } from "express";
import { sendMessage } from "./message.controller";

const router = Router();

router.post('/sendMsg' , sendMessage)

export default router