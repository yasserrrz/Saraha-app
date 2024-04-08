import { Router } from "express";
import { deleteMassage, sendMessage } from "./message.controller.js";

const router = Router();

router.post('/sendMsg' , sendMessage)
router.delete('/deleteMsg/:id' , deleteMassage)
router.pu('/deleteMsg/:id' , deleteMassage)

export default router