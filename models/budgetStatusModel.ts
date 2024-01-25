import mongoose from 'mongoose';
import { BudgetStatus } from '../types';

const Schema = mongoose.Schema

const budgetStatusSchema = new Schema({
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'paid'],
        required: true,
        unique: true
    },
}, { timestamps: true });

export default mongoose.model<BudgetStatus>("BudgetStatus", budgetStatusSchema, "BudgetsStatus");