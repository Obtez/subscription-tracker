import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Subscription from "../models/subscription";

// get list of all subscriptions in database
export const getAllSubscriptions = (req: Request, res: Response) => {
  Subscription.find({}, (err: any, subscriptions: any) => {
    if (err) {
      res.status(404).json({message: "There was an error when fetching the subscriptions."})
    }

    res.json(subscriptions)
  })
}

// create new entry for a subscription
export const createNewSubscription = (req: Request, res: Response) => {
  const newSubscription = new Subscription(req.body);

  newSubscription.save((err: any, subscription: any) => {
    if (err) {
      res.status(500).json({message: "There was an error when saving the subscription."})
    }
    res.json(subscription)
  })
}

// delete entry by id
export const deleteEntryById = (req: Request, res: Response) => {
  Subscription.findByIdAndDelete({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({message: "Entry deleted."})
    }
  })
}

// update entry by id
export const updateEntryById = (req: Request, res: Response) => {
  Subscription.findByIdAndUpdate({ _id: req.params.id }, req.body, (err: any, subscription: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({message: "Entry updated."})
    }
  })
}