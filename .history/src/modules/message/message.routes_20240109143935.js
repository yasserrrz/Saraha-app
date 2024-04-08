import { Router } from "express";
import { MarkeMassage, deleteMassage, sendMessage } from "./message.controller.js";

const router = Router();

router.post('/sendMsg' , sendMessage)
router.delete('/deleteMsg/:id' , deleteMassage)
router.put('/marking/:id/isViewed' , MarkeMassage)

export default router