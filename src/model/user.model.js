import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    name:String,
    image:String
})

export const Author = mongoose.models.Author || mongoose.model("Author",userSchema)