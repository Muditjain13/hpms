const express = require("express");
const router = express.Router();
const Billing = require("../models/Billing");

router.get("/generate", (req, res) => {
    res.render("billing");
});

router.post("/generate", async (req, res) => {
    try {
        const newBill = new Billing(req.body);
        await newBill.save();
        res.redirect("/billing/generate?success=true");
    } catch (error) {
        res.redirect("/billing/generate?error=true");
    }
});

module.exports = router;