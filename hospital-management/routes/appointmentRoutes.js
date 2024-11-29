const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.get("/schedule", (req, res) => {
    res.render("appointment");
});

router.post("/schedule", async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.redirect("/appointments/schedule?success=true");
    } catch (error) {
        res.redirect("/appointments/schedule?error=true");
    }
});

module.exports = router;