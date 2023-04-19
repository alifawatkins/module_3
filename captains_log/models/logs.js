const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model

const logsSchema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: {
        type: Boolean,
        default: true,
    },
  },
  { timestamps: true }
);

const Log = model("Log", logsSchema);

module.exports = Log;