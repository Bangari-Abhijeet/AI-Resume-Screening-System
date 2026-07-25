// =============================================
// AI Resume Screening & Job Recommendation System
// Backend Entry Point
// =============================================

// Load environment variables
require("dotenv").config();

// Import Packages
const express = require("express");
const cors = require("cors");

// Import Database Connection
const connectDB = require("./src/config/db");

// Initialize Express App
const app = express();

// =============================================
// Connect to MongoDB
// =============================================
connectDB();

// =============================================
// Middleware
// =============================================
app.use(cors());
app.use(express.json());
const authRoutes = require("./src/routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use(express.urlencoded({ extended: true }));

// =============================================
// Routes
// =============================================

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("🚀 AI Resume Screening Backend is Running...");
});

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is working perfectly 🚀",
    timestamp: new Date(),
  });
});

// =============================================
// Start Server
// =============================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("======================================");
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🌍 Environment : ${process.env.NODE_ENV || "development"}`);
  console.log("======================================");
});