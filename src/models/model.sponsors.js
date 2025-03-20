import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema(
  {
    //campos que debe llevar Name imgs, website, description, sponsoredCreators, clickCounts, isActive, createdAt, updatedAt
    name: { type: String, unique: true, required: true },
    imgs: [{ type: String }],
    website: { type: String },
    description: { type: String, required: true },
    sponseredCreators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "creator",
        required: true,
      },
    ],
    clickCounts: { type: Number, requeried: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const sponsorModel = mongoose.model("sponsor", SponsorSchema);
