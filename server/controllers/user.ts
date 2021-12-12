import express, { Request, Response } from "express";
import { ObjectId } from "mongoose";
import User from "../models/user";

interface UserInDatabase {
  _id: ObjectId,
  name: string,
  email: string,
  password: string
}

// get list of all users in database
export const getAllUsers = (req: Request, res: Response) => {
  User.find({}, (err: any, users: UserInDatabase[]) => {
    if (err) {
      res.status(404).json({ message: "There was an error fetching the users." })
    }
    res.json(users)
  })
}

// get one user by id
export const getUserById = (req: Request, res: Response) => {
  User.find({ _id: req.params.id }, (err: any, user: UserInDatabase) => {
    if (err) {
      res.status(404).json({ message: "No matching user found." })
    }
    res.json(user)
  })
}

// create new user
export const createNewUser = (req: Request, res: Response) => {
  const newUser = new User(req.body);

  newUser.save((err: any, user: UserInDatabase) => {
    if (err) {
      res.status(500).json({ message: "There was an error when saving the user." })
    }
    res.json(user)
  })
}

// delete user by id
export const deleteUserById = (req: Request, res: Response) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ message: "User deleted." })
    }
  })
}

// update user by id
export const updateUserById = (req: Request, res: Response) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body, (err: any, user: UserInDatabase) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ message: "User updated." })
    }
  })
}
