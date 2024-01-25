import mongoose from "mongoose";
import { Budget } from "../types";

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    total: {
      type: Number,
      required: true,
    },
    project: {
      type: String,
      ref: "Project",
      required: true,
    },
    client: {
      type: String,
      ref: "Client",
      required: true,
    },
    status: {
      type: String,
      ref: "BudgetStatus",
      required: true,
    },
    created_by: {
      type: String,
      ref: "User",
      required: true,
    },
    edited_by: {
      type: String,
      ref: "User",
    },
}, { timestamps: true });

export default mongoose.model<Budget>("Budget", budgetSchema, "Budgets");