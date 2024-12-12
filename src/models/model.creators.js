import mongoose from "mongoose";

const CreatorsSchema = new mongoose.Schema(
  {
    //rol de si es admin o user pero seran admin y prefrens  es de si white o dark
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    creatorName: { type: String, required: true, unique: true },
    name: { type: String },
    images: [{ type: String }],
    militaryGrade: { type: String },
    institutions: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "institutions",
      required: true,
    },
    sponsors: [{ type: mongoose.Schema.Types.ObjectId, ref: "sponsors" }],
    merch: [{ type: mongoose.Schema.Types.ObjectId, ref: "merch" }],
    courses: [{ type: mongoose.Schema.Types.ObjectId, fef: "courses" }],
    lastLogin: { type: Number, required: true },
    notification: { type: Boolean, default: true },
    role: { type: String, required: true },
    preference: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const modelCreator = mongoose.model("creators", CreatorsSchema);