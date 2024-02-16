import mongoose, { Model } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

import { User as UserType } from "../types";

const Schema = mongoose.Schema;

interface UserStatics extends Model<UserType> {
  login(email: string, password: string): Promise<UserType>;
  signup(user: Partial<UserType>): Promise<UserType>;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
  },
  { timestamps: true }
);

userSchema.statics.login = async function (email: string, password: string) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid email or password");
  }

  return user;
};

userSchema.statics.signup = async function (userSignup: Partial<UserType>) {
  console.log(userSignup);
  if (!userSignup.email || !userSignup.password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(userSignup.email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(userSignup.password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email: userSignup.email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(userSignup.password, salt);
  const user = await this.create({
    email: userSignup.email,
    password: hash,
    firstName: userSignup.firstName,
    lastName: userSignup.lastName,
  });
  console.log(user);
  return user;
};

export default mongoose.model<UserType, UserStatics>(
  "User",
  userSchema,
  "Users"
);
