const mongoose = require("mongoose");

const PanelSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    min: 3,
  },
});

module.exports = mongoose.model("Panel", PanelSchema);
