import mongoose from "mongoose";

const MerchSchema = new mongoose.Schema(
  {
    //aqui ciniofguraremos los campos de merch, name, description , price, category, stock, sizes, images, discount, isFeatured, createdAt, updateAt
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: [{ type: Number, required: true }],
    stock: { type: Number, required: true },
    sizes: [{ type: String }],
    images: [{ type: String, required: true }],
    afiliatedCreators: [
      { type: mongoose.Schema.Types.ObjectId, required: true, ref: "creator" },
    ],
    discount: { type: Number },
    isFeatured: { type: Boolean, default: false },
    offer: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const merchModel = mongoose.model("merche", MerchSchema);
