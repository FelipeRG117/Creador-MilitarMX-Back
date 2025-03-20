import mongoose from "mongoose";

const InstitutionSchema = new mongoose.Schema(
  {
    //campos name, description, website, images, address, contactEmail, contactPhones,afiliatedCreators, estabilshedDate(fundacion de la instancion), createdAt(creacion de usaurio), updateAt,
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    websites: [{ type: String }],
    images: [{ type: String, required: true }],
    adress: [{ type: String, required: true }],
    contactEmail: [{ type: String, required: true }],
    contactPhones: [{ type: Number, required: true }],
    afiliatedCreators: [
      { type: mongoose.Schema.Types.ObjectId, required: true, ref: "creator" },
    ],
    estabilshedDate: { type: String },
  },
  { timestamps: true }
);

export const institutionModel = mongoose.model(
  "institution",
  InstitutionSchema
);
