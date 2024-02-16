import mongoose from "mongoose";
import { Request, Response } from "express";

import BudgetStatus from "../models/budgetStatusModel";
import { BudgetStatus as BudgetStatusType } from "../types";

// get all bugdet statuses
const getBudgetsStatuses = async (req: Request, res: Response) => {
  try {
    const budgetStatuses = await BudgetStatus.find();
    console.log("HERE");
    console.log(budgetStatuses);
    res.status(200).json(budgetStatuses);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// get budget status by ID
const getBudgetStatusByID = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No budget with that id");
  }

  try {
    const budget = await BudgetStatus.findById(id);
    res.status(200).json(budget);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// get budget statuses by status
const getBudgetStatusByStatus = async (req: Request, res: Response) => {
  const { status } = req.params;

  try {
    const budgets = await BudgetStatus.find({ status });
    res.status(200).json(budgets);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// get budget statuss by budget ID
const getBudgetStatusByBudgetID = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No budget with that id");
  }

  try {
    const budgetStatus = await BudgetStatus.find({ budget: id });

    res.status(200).json(budgetStatus);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// create budget status
const createBudgetStatus = async (req: Request, res: Response) => {
  const budgetStatus: Partial<BudgetStatusType> = req.body;
  const requiredFields: (keyof BudgetStatusType)[] = ["status", "budget"];
  const emptyFields: (keyof BudgetStatusType)[] = requiredFields.filter(
    (field) => !budgetStatus[field]
  );

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to BudgetsStatus DB
  try {
    const newBudgetStatus = await BudgetStatus.create(budgetStatus);
    res.status(200).json(newBudgetStatus);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export {
  getBudgetsStatuses,
  getBudgetStatusByID,
  getBudgetStatusByStatus,
  getBudgetStatusByBudgetID,
  createBudgetStatus,
};
