const express = require("express");
const router = express.Router();
const { createBooking, getUserBookings } = require("../controllers/bookingController");
const { protect } = require("../middleware/authMiddleware");

// Create booking (user must be logged in)
router.post("/", protect, createBooking);

// Get bookings of logged-in user
router.get("/", protect, getUserBookings);

module.exports = router;
