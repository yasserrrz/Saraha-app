import { Router } from "express";
import { deleteMassage, sendMessage } from "./message.controller.js";

const router = Router();

router.post('/sendMsg' , sendMessage)
router.delete('/deleteMsg/:id' , deleteMassage)
router.put('/marki/:id' , deleteMassage)

export default router