import mongoose from 'mongoose';

type SubscriptionStatus = "active" | "inactive" | "expiring" | "watching"

interface Subscription {
  name: string;
  cost: number;
  intervalInMonths: number;
  status: SubscriptionStatus;
}

const subscriptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tier: { type: String, required: false },
  url: { type: String, required: false },
  cost: { type: Number, default: 0 },
  intervalInMonths: { type: Number, default: 0 },
  status: { type: String, default: "active"},
  expiresAt: {type: Date, required: false},
  firstActivated: { type: Date, default: new Date() },
})

const Subscription = mongoose.model("Subscription", subscriptionSchema)

export default Subscription;