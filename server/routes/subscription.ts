import express from "express";
import { createNewSubscription, getAllSubscriptions } from "../controllers/subscription";
const router = express.Router();

router.get("/", getAllSubscriptions)

router.post("/", createNewSubscription)

export default router