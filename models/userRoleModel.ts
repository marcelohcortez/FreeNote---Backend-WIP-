import mongoose from 'mongoose';
import { UserRole } from '../types';

const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    status: {
        type: String,
        enum: ['pending', 'approved', 'denied', 'onHold', 'onGoing', 'canceled', 'finished'],
        required: true,
        unique: true
    },
}, { timestamps: true });

export default mongoose.model<UserRole>("UserRole", userRoleSchema, "UsersRole");