import mongoose from "mongoose";
import { type } from "os";

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.objectId,
      //   necessary to write
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Prodeuct", productSchema);
