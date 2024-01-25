import mongoose from "mongoose";

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    _id: String,
    paid: Number,
    budget: {
        type: String,
        ref: "Budget",
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
    limit_date: Date,
    last_payment_value: Number,
    last_payment_date: Date,
    next_payment_value: Number,
    next_payment_date: Date,
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

module.exports = mongoose.model("Payment", paymentSchema, "Payments");