const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
    patientID: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    amount: Number,
    paymentMethod: String,
    status: { type: String, default: "Unpaid" },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Billing", billingSchema);