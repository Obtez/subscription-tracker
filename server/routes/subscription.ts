import express from "express";
import { createNewSubscription, getAllSubscriptions, deleteEntryById, updateEntryById } from "../controllers/subscription";
const router = express.Router();

router.get("/", getAllSubscriptions);

router.post("/", createNewSubscription);

router.delete("/:id", deleteEntryById);

router.put("/:id", updateEntryById);

export default router;