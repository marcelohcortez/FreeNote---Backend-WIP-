import mongoose from "mongoose";
import { Client } from "../types";

const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: String,
    whatsapp: String,
    website: String,
    reference: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    edited_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    owned_projects: {
      type: [Schema.Types.ObjectId],
      ref: "Project",
    },
  },
  { timestamps: true }
);

export default mongoose.model<Client>("Client", clientSchema, "Clients");
