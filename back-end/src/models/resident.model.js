const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("resident", residentSchema);
