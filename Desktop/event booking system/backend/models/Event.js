const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  category: { type: String, default: "General" },
  ticketsAvailable: { type: Number, required: true },
  price: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  heroImage: { type: String },        // optional main image URL
  gallery: [{ type: String }],        // optional additional images
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
