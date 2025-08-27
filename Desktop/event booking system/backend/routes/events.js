const express = require("express");
const router = express.Router();
const { createEvent, getEvents, getEventById } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

// Create event (protected)
router.post("/", protect, createEvent);

// Get all events
router.get("/", getEvents);

// Get single event by ID
router.get("/:id", getEventById);

module.exports = router;
