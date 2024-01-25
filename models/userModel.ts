import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    name: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema, "Users");