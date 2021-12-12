import express from "express";
import { createNewSubscription, getAllSubscriptions, deleteEntryById } from "../controllers/subscription";
const router = express.Router();

router.get("/", getAllSubscriptions);

router.post("/", createNewSubscription);

router.delete("/:id", deleteEntryById);

export default router;