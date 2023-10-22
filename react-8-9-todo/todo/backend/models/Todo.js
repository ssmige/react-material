import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 120,
  },
  dataOfCreation: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
});
export default mongoose.model("Todo", todoSchema);
