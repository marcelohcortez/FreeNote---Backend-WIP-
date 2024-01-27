import mongoose from 'mongoose';
import { UserRole } from '../types';

const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    status: {
        type: String,
        enum: ['Admin', 'Member', 'Client', 'Visitor'],
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export default mongoose.model<UserRole>("UserRole", userRoleSchema, "UsersRole");