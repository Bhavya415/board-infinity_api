import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  name: String,
  description: String,
  creator: String,
  duration: Number,
  createdAt: Date,
  expireAt: Date,
});

const taskModel = mongoose.model("taskmodel", taskSchema);
export default taskModel;
