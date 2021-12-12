import { ObjectId } from "mongoose";

export type SubscriptionStatus = "active" | "inactive" | "expiring" | "watching"

export interface NewSubscription {
  name: string;
  cost: number;
  intervalInMonths: number;
  status: SubscriptionStatus;
}

export interface Subscription extends NewSubscription{
  _id: ObjectId;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}