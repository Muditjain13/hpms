const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/hospitalDB", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const billingRoutes = require("./routes/billingRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
app.get("/", (req, res) => {
    res.render("home");
});
app.use("/patients", patientRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/billing", billingRoutes);
app.use("/feedback", feedbackRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});