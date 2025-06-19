const express = require('express');
const dotenv = require('dotenv');           // ✅ Load environment variables
const connectDB = require('./helpers/init_mongodb'); // ✅ Connect to MongoDB

dotenv.config(); // 🔑 Activate .env values

const app = express();

// 🔧 Middleware to read JSON in requests
app.use(express.json());

// 📦 Import routes
const studentRoutes = require('./routes/api');

// 🔗 Use the routes under /students
app.use('/students', studentRoutes);

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Welcome to my Student API!');
});

// 🛢 Connect to MongoDB
connectDB();

// 🚀 Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
