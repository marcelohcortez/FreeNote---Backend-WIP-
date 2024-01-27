import mongoose, { Model } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

import { User } from "../types";

const Schema = mongoose.Schema;

interface UserStatics extends Model<User> {
    login(email: string, password: string): Promise<User>;
    signup(email: string, password: string): Promise<User>;
}

const userSchema = new Schema({
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    firstName: String,
    lastName: String,
}, { timestamps: true });

userSchema.statics.login = async function(email: string, password: string) {
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Invalid email or password');
    }

    return user;

}

userSchema.statics.signup = async function(email: string, password: string) {
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash });

    return user;
}

export default mongoose.model<User, UserStatics>("User", userSchema, "Users");