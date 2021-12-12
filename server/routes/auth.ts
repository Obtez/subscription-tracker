import express from "express";
import { loginUser, registerNewUser } from "../controllers/auth";
const router = express.Router()

router.post("/register", registerNewUser);

router.post("/login", loginUser);

export default router