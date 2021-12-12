import mongoose from 'mongoose';

interface User {
  userName: string;
  email: string;
  password: string;
  token: string;
}

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String }
})

const User = mongoose.model("User", userSchema);

export default User;