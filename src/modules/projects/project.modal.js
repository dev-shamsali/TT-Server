import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: String,
    description: Scrings,
    pmId: {type:mongoose.Schema.Types.ObjectId, ref: "User"},
    startDate: Date,
    endDate: Date,
    status: String
}, {timestamps: true});

export default mongoose.model("Project",projectSchema);