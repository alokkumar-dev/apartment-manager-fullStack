const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    flatNo: { type: Number, required: true },
    flatType: ["owner", "tenant"],
    residentId: [
      { type: mongoose.Schema.Types.ObjectId, ref: "resident", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("flat", flatSchema);