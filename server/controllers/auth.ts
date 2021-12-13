import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";
import dotenv from "dotenv"

dotenv.config();

const TOKEN_KEY = process.env.TOKEN_KEY;

// register new user
export const registerNewUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;

    // check if all fields are filled in
    if (!(userName && email && password)) {
      res.status(400).json({ message: "All input is required." })
    }

    // check if user already exists
    const userInDatabase = await User.findOne({ email });

    if (userInDatabase) {
      return res.status(409).json({ message: "User already exists. Please login with your account information." })
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      email: email.toLowerCase(),
      password: encryptedPassword
    });

    if (TOKEN_KEY) {
      const token = jwt.sign(
        { user_id: user._id, email },
        TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      res.status(201).json(user);
    }

    
  } catch (err) {
    console.log(err);
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({ message: "All inputs are required." })
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "No user found." })
    }
    if (user) {
      const passwordsMatch = await bcrypt.compare(password, user.password)

      if (user && passwordsMatch) {
        if (TOKEN_KEY) {
          const token = jwt.sign(
            { user_id: user._id, email },
            TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );

          user.token = token;

          res.status(201).json(user);
        }
      } else {
        res.status(400).json({ message: "Invalid Credentials." })
      }
    }
    } catch (err) {
      console.log(err);
    }
}