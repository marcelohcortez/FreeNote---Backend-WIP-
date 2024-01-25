import mongoose from 'mongoose';

const Schema = mongoose.Schema

const budgetStatusSchema = new Schema({
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        required: true,
        unique: true
    },
}, { timestamps: true });


module.exports = mongoose.model('BudgetStatus', budgetStatusSchema, 'BudgetsStatus');