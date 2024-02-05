import mongoose from "mongoose";
import { Note } from "../types";

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    info_data: [String],
  },
  { timestamps: true }
);

export default mongoose.model<Note>("Note", noteSchema, "Notes");
