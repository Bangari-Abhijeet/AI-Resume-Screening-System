// =============================================
// Database Configuration
// AI Resume Screening & Job Recommendation System
// =============================================

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log("======================================");
    console.log("✅ MongoDB Connected Successfully");
    console.log(`📦 Database Host : ${conn.connection.host}`);
    console.log(`🗂️  Database Name : ${conn.connection.name}`);
    console.log("======================================");
  } catch (error) {
    console.error("======================================");
    console.error("❌ MongoDB Connection Failed");
    console.error(`Error: ${error.message}`);
    console.error("======================================");

    process.exit(1);
  }
};

module.exports = connectDB;