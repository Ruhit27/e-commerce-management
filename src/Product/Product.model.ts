import { Schema, model } from "mongoose";
import { Tinventory, Tproduct, Tvariants } from "./Product.interface";

const varientSchema = new Schema<Tvariants>(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const inventorySchema = new Schema<Tinventory>(
  {
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false }
);

const productSchema = new Schema<Tproduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [varientSchema],
    required: true,
  },

  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const ProductModel = model<Tproduct>("product", productSchema);
