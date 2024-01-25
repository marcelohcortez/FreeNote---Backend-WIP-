import mongoose from "mongoose";
import {Request, Response} from "express";

import Payment from "../models/paymentModel";
import { Payment as PaymentType } from "../types";

// get all payments
const getPayments = async (req: Request, res: Response) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// get single payment
const getPayment = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No payment with that id');
    }

    try {
        const payment = await Payment.findById(id);
        res.status(200).json(payment);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// create payment
const createPayment = async (req: Request, res: Response) => {
    const payment: Partial<PaymentType> = req.body;

    const requiredFields: (keyof PaymentType)[] = ["ammount", "budget", "project", "client", "created_by"];
    const emptyFields: (keyof PaymentType)[] = requiredFields.filter(field => !payment[field]);

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    // add doc to DB
    try {
        const newPayment = await Payment.create(payment)
        res.status(200).json(newPayment)
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// delete payment
const deletePayment = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No project with that id');
    }

    try {
        const payment = await Payment.findOneAndDelete({_id: id});
        res.status(200).json(payment);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// update payment
const updatePayment = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No payment with that id');
    }

    try {
        const payment = await Payment.findByIdAndUpdate({_id: id}, {...req.body});
        res.status(200).json(payment);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

export { getPayments, getPayment, createPayment, deletePayment, updatePayment }