import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  raisedBy: {
    type: String,
    required: true,
  },
  orgId: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  raisedFor: {
    type: Number,
    required: true,
  },
});
