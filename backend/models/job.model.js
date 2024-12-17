import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: String
    },
    salary: {
        type: Number,
        required: true,
    },
    experienceLevel: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    //company ka naam aayega
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    //recruter ka naam aayeg is model me creted_by
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application'
        }
    ],
    status: {
        type: Number,
        default: 1
    },

}, { timestamps: true })

export default mongoose.model("job", jobSchema)