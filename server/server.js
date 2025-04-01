const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const authRouter = require("./routes/authRoutes");
const profileRouter = require('./routes/profileRoutes')

require("dotenv").config({ path: "./config/.env" });

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRouter);
app.use('/profile', profileRouter)

// Listen
app.listen(process.env.PORT || 5000, () => {
  console.log("App is Listening, Capn!");
});
