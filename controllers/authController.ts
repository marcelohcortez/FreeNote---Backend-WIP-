require("dotenv").config();
import mongoose from "mongoose";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import User from "../models/userModel";
import { User as UserType } from "../types";

const createToken = (_id: string) => {
  const secret = process.env.SECRET || ""; // Set a default value for SECRET if it is undefined
  return jwt.sign({ _id }, secret, { expiresIn: "3d" });
};

// login user
const loginUser = async (req: Request, res: Response) => {
  const user: Partial<UserType> = req.body;
  const requiredFields: (keyof UserType)[] = ["email", "password"];
  const emptyFields: (keyof UserType)[] = requiredFields.filter(
    (field) => !user[field]
  );

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const userLogin: Partial<UserType> = await User.login(
      user.email!,
      user.password!
    );

    if (userLogin._id) {
      // create a token
      const token = createToken(userLogin._id);

      res.status(200).json({ userLogin, token });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

//signup user
const signupUser = async (req: Request, res: Response) => {
  const user: Partial<UserType> = req.body;
  console.log(user);

  const requiredFields: (keyof UserType)[] = ["email", "password"];
  const emptyFields: (keyof UserType)[] = requiredFields.filter(
    (field) => !user[field]
  );

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const userSignUp = await User.signup(user);

    if (userSignUp) {
      // create a token
      const token = createToken(userSignUp._id);

      res.status(200).json({ userSignUp, token });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export { loginUser, signupUser };
