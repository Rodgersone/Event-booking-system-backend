const mongoose = require('mongoose');
require('dotenv').config(); // 🔑 Load environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ✨ Clean and modern
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
