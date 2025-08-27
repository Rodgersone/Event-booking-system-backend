const Booking = require("../models/Booking");
const Event = require("../models/Event");

// Create a booking
const createBooking = async (req, res) => {
  try {
    const { eventId, tickets } = req.body;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (tickets > event.ticketsAvailable)
      return res.status(400).json({ message: "Not enough tickets available" });

    const totalPrice = tickets * event.price;

    const booking = await Booking.create({
      user: req.user._id,
      event: eventId,
      tickets,
      totalPrice,
      status: "confirmed",
    });

    event.ticketsAvailable -= tickets;
    await event.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get bookings of logged-in user
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("event");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBooking, getUserBookings };
