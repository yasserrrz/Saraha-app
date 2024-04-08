import { Router } from "express";
import { MarkeMassage, deleteMassage, getAllMessages, sendMessage } from "./message.controller.js";

const router = Router();

router.post('/sendMsg' , sendMessage)
router.use(a)
router.delete('/deleteMsg/:id' , deleteMassage)
//http://localhost:3000/message/marking/659d34d1f0ad3859d8714148/?isViewed=false 
router.patch('/marking/:id' , MarkeMassage)

router.get('/getallmssages' , getAllMessages)

export default router