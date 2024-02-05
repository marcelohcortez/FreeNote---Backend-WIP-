import mongoose from "mongoose";
import { Project } from "../types";

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    budget: {
      type: Schema.Types.ObjectId,
      ref: "Budget",
      required: true,
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    info_data: [String],
    website: String,
    startDate: Date,
    endDate: Date,
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    edited_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model<Project>("Project", projectSchema, "Projects");
