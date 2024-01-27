import mongoose from "mongoose";
import { Payment } from "../types";

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    ammount: {
        type: Number,
        required: true
    },
    budget: {
        type: Schema.Types.ObjectId,
        ref: "Budget",
        required: true,
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client",
        required: true,
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    limit_date: Date,
    last_payment_value: Number,
    last_payment_date: Date,
    next_payment_value: Number,
    next_payment_date: Date,
    edited_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });

export default mongoose.model<Payment>("Payment", paymentSchema, "Payments");