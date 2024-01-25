import mongoose from "mongoose";
import { User } from "../types";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        ref: 'UsersRole',
        required: true
    },
    firstName: String,
    lastName: String,
}, { timestamps: true });

export default mongoose.model<User>("User", userSchema, "Users");