const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patientID: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    doctorName: String,
    date: Date,
    time: String,
    status: { type: String, default: "Scheduled" }
});

module.exports = mongoose.model("Appointment", appointmentSchema);