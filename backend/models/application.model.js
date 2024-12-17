import mongoose from "mongoose";
const Schema = mongoose.Schema;

const applicationSchema = new mongoose.Schema({
    //creating relation between job
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
    },
    status: {
        type: Number,
        default: 1
    },
}, { timestamps: true })

export default mongoose.model("Application", applicationSchema);