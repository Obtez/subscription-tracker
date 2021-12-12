import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose, { ConnectOptions } from "mongoose"
import subscriptionRoutes from "./routes/subscription";

dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 8081

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || undefined

if (MONGO_URI) {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  } as ConnectOptions).then(res => console.log("Connected to MongoDB.")).catch(err => console.log(err))
} else {
  console.log("Could not find URI for MongoDB.")
}


app.get("/", (req: Request, res: Response) => {
  res.json({message: "Hello World"})
})

app.use("/api/subscriptions", subscriptionRoutes)

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})