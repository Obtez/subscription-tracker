import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 8081

app.get("/", (req: Request, res: Response) => {
  res.json({message: "Hello World"})
})

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})