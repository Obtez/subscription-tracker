import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

const TOKEN_KEY = process.env.TOKEN_KEY;



export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  if (TOKEN_KEY) {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    console.log(token)

    if (!token) {
      return res.status(403).json({ message: "A token is required for authentication." })
    }

    try {
      const decoded = jwt.verify(token, TOKEN_KEY);
      req.body.user = decoded;
      console.log(decoded)
    } catch (err) {
      console.log("Hi")
      return res.status(401).json({ message: "Invalid token." });
    }
    return next();
  } else {
    console.log("No token key.")
    res.status(401).json({ message: "No token key found." })
  }
}