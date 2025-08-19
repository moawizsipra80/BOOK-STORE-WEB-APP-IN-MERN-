import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  publishYear: {
      type: Number,              // Sirf year store hoga
      min: 1000,
      max: new Date().getFullYear(), // Dynamic max year
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
    image: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
