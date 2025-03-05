const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const spotlightRoutes = require("./routes/spotlightRoutes.js");
const path = require('path');
dotenv.config();

const app = express();

app.use((req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    express.json({ limit: "10kb" })(req, res, next);
  } else {
    next();
  }
});

app.use(cors());

app.use("/api/users", userRoutes);

app.use("/api/spotlights", spotlightRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Invalid Routes
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
