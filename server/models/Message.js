const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    prompt: { type: String, required: true },
    response: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);