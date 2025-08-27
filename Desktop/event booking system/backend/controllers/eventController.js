const Event = require("../models/Event");

// Create event (Admin/User who creates)
const createEvent = async (req, res) => {
  try {
    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location,
      category: req.body.category || "General",
      ticketsAvailable: req.body.ticketsAvailable,
      price: req.body.price,
      createdBy: req.user._id,
      heroImage: req.body.heroImage || "",
      gallery: req.body.gallery || [],
    });

    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error: error.message });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: error.message });
  }
};

// Get single event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("createdBy", "name email");
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error: error.message });
  }
};

module.exports = { createEvent, getEvents, getEventById };
