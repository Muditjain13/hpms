const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.redirect("/patients/register?success=true");
    } catch (error) {
        res.redirect("/patients/register?error=true");
    }
});

module.exports = router;