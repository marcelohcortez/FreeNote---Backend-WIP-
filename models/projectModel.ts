import mongoose from "mongoose";
import { Project } from "../types";

const Schema = mongoose.Schema;

const projectSchema = new Schema({ 
    name: {
        type: String,
        required: true,
    },
    description: String,
    budget: {
        type: String,
        ref: 'Budget',
        required: true,
    },
    client: {
        type: String,
        ref: 'Client',
        required: true,
    },
    status: {
        type: String,
        ref: 'ProjectStatus',
        required: true,
    },
    access_data: [String],
    website: String,
    startDate: Date,
    endDate: Date,
    created_by: {
        type: String,
        ref: "User",
        required: true,
    },
    edited_by: {
        type: String,
        ref: "User",
    },
}, { timestamps: true });

export default mongoose.model<Project>('Project', projectSchema, 'Projects');