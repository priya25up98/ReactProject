import mongoose from "mongoose";

const Schema = mongoose.Schema;
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: tbbrue,
        unique: true
    },
    description: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    logo: {
        type: String,  //url to company logo

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    status: {
        type: Number,
        default: 1
    },
}, { timestamps: true })

export default mongoose.model("Company", companySchema);