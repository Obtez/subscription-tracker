import express from "express";
import { getAllUsers, getUserById, createNewUser, deleteUserById, updateUserById } from "../controllers/user";

const router = express.Router()

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/", createNewUser);

router.delete("/:id", deleteUserById);

router.put("/:id", updateUserById);

export default router