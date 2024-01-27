import mongoose from 'mongoose';
import { BudgetStatus } from '../types';

const Schema = mongoose.Schema

const budgetStatusSchema = new Schema({
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected', 'Paid'],
        required: true,
        unique: true
    },
    budget: {
        type: Schema.Types.ObjectId,
        ref: 'Budget',
        required: true
    }
}, { timestamps: true });

export default mongoose.model<BudgetStatus>("BudgetStatus", budgetStatusSchema, "BudgetsStatus");