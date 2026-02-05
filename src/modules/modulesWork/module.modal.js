import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  projectId: mongoose.Schema.Types.ObjectId,
  title: String,
  assignedTo: mongoose.Schema.Types.ObjectId,
  progress: { type: Number, default: 0 },
  deadline: Date,
});

export default mongoose.model("ModuleWork",moduleSchema);