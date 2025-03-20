import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    //name userName, email, password, firstName, preferences(de white o dark), role(osea user o o admin), notificaciones, location( osea del User), createdAt, lastLogin
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    preference: { type: Boolean, default: true },
    role: { type: String, required: true },
    notification: { type: Boolean, default: true },
    location: { type: String },
    lastLogin: { type: Number, required: true },
    followed: { type: String },
  },
  { timestamps: true }
);

export const modelUsers = mongoose.model("user", usersSchema);
