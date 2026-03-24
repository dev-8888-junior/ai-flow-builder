const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // no need for old options; mongoose v7+ handles it
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectDB;