const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  number: { type: Number, required: true },
  parity: { type: String, required: true },
});

module.exports = mongoose.model("Patient", patientSchema);
