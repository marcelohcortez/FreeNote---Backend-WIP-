import mongoose from "mongoose";
import { Request, Response } from "express";

import Budget from "../models/budgetModel";
import { Budget as BudgetType } from "../types";

// get all budgets
const getBudgets = async (req: Request, res: Response) => {
    try {
        const budgets = await Budget.find();
        res.status(200).json(budgets);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// get single budget
const getBudget = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No budget with that id');
    }

    try {
        const budget = await Budget.findById(id);
        res.status(200).json(budget);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// create budget
const createBudget = async (req: Request, res: Response) => {
    const budget: Partial<BudgetType> = req.body;
console.log("HIT")
    const requiredFields: (keyof BudgetType)[] = ["total", "project", "client", "created_by"];
    const emptyFields: (keyof BudgetType)[] = requiredFields.filter(field => !budget[field]);

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    // add doc to DB
    try {
        const newBudget = await Budget.create(budget);
        res.status(200).json(newBudget);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// delete budget
const deleteBudget = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No budget with that id');
    }

    try {
        const budget = await Budget.findOneAndDelete({_id: id});
        res.status(200).json(budget);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// update budget
const updateBudget = async (req: Request, res: Response) => {
    const { id } = req.params;
    const budget: Partial<BudgetType> = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No budget with that id');
    }

    try {
        const budget = await Budget.findByIdAndUpdate({_id: id}, {...req.body});
        res.status(200).json(budget);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

export { getBudgets, getBudget, createBudget, deleteBudget, updateBudget };