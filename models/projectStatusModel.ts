import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectStatusSchema = new Schema({
    _id: String,
    status: {
        type: String,
        enum: ['pending', 'approved', 'denied', 'onHold', 'onGoing', 'canceled', 'finished'],
        required: true,
        unique: true
    },
}, { timestamps: true });


module.exports = mongoose.model('ProjectStatus', projectStatusSchema, "ProjectsStatus");