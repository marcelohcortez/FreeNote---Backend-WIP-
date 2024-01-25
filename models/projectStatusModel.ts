import mongoose from 'mongoose';
import { ProjectStatus } from '../types';

const Schema = mongoose.Schema;

const projectStatusSchema = new Schema({
    status: {
        type: String,
        enum: ['pending', 'approved', 'denied', 'onHold', 'onGoing', 'canceled', 'finished'],
        required: true,
        unique: true
    },
}, { timestamps: true });

export default mongoose.model<ProjectStatus>("ProjectStatus", projectStatusSchema, "ProjectsStatus");