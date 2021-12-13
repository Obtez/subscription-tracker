import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";

// MIDDLEWARE
import { verifyToken } from './middleware/auth';

// ROUTES
import subscriptionRoutes from "./routes/subscription";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/welcome", verifyToken, (req: Request, res: Response) => {
  res.status(200).send("Welcome");
})

app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})