import mongoose from "mongoose";

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    _id: String,
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
    added_by: {
      type: String,
      ref: "User",
      required: true,
    },
    edited_by: {
      type: String,
      ref: "User",
    },
}, { timestamps: true });

module.exports = mongoose.model("Budget", budgetSchema, "Budgets");