import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkUserId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  userType: { type: String, default: "Rider" },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
