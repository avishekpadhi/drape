import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // from "title"
    description: { type: String },
    price: { type: Number, required: true },
    colour: { type: String },
    gender: { type: String },
    category: { type: String },
    image: { type: String }, // main image
    images: [String], // array of image URLs
    rating: {
      rate: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
