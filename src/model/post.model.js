import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        price: Number,
        category: String,
        image: String
    }
)

export const Product = mongoose.models.Product || mongoose.model("Product",postSchema)