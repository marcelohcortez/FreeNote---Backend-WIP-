import mongoose from "mongoose";
import { Request, Response } from "express";

import User from "../models/userModel";
import { User as UserType } from "../types";

// get all users
const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// get single user
const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No user with that id');
    }

    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// create user
const createUser = async (req: Request, res: Response) => {
    const user: Partial<UserType> = req.body;

    const requiredFields: (keyof UserType)[] = ["email", "password", "role"];
    const emptyFields: (keyof UserType)[] = requiredFields.filter(field => !user[field]);

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    // add doc to DB
    try {
        const newUser = await User.create(user)
        res.status(200).json(newUser)
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// delete user
const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No user with that id');
    }

    try {
        const user = await User.findOneAndDelete({_id: id});
        res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// update user
const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user: Partial<UserType> = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No user with that id');
    }

    try {
        const user = await User.findOneAndUpdate({_id: id}, {...req.body});
        res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

export { getUsers, getUser, createUser, deleteUser, updateUser };