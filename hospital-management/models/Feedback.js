const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    patientID: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    rating: Number,
    comments: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", feedbackSchema);