import mongoose from 'mongoose';
import { ProjectStatus } from '../types';

const Schema = mongoose.Schema;

const projectStatusSchema = new Schema({
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Denied', 'On Hold', 'On Going', 'Canceled', 'Finished'],
        required: true,
        unique: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    }
}, { timestamps: true });

export default mongoose.model<ProjectStatus>("ProjectStatus", projectStatusSchema, "ProjectsStatus");