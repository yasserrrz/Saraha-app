import { Router } from "express";

const router = Router();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  

export default router