const express = require("express");
const router = express.Router();
const { createEvent, getEvents, getEventById } = require("../controllers/eventController");
const { protect, admin } = require("../middleware/authMiddleware");

// @route   POST /api/events
// @desc    Create a new event (protected)
router.post("/", protect, createEvent); // optionally add 'admin' if only admins can create

// @route   GET /api/events
// @desc    Get all events
router.get("/", getEvents);

// @route   GET /api/events/:id
// @desc    Get single event by ID
router.get("/:id", getEventById);

module.exports = router;
