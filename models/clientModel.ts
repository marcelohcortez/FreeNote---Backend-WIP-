import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
      type: String,
      required: true,
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
    address: String,
    whatsapp: String,
    website: String,
    reference: {
        type: String,
        ref: 'Client'
    },
    added_by: {
      type: String,
      ref: "User",
      required: true,
    },
    edited_by: {
      type: String,
      ref: "User",
    },
    owned_projects: {
      type: [String],
      ref: "Project",
    },
}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema, "Clients");