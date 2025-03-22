const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
    min: 3,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  panelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Panel",
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true
  // }
});

module.exports = mongoose.model("Goal", GoalSchema);