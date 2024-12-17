import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'recruiter', 'Admin'],
        required: true
    },

    profiles: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String },  //url to rsume file
        resumeOrignalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilePhoto: {
            type: String,
            default: '',
        }
    },
    status: {
        type: Number,
        default: 1
    },

}, { timestamps: true })

export default mongoose.model("user", userSchema);

