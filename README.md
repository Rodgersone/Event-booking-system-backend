# Event Booking System - Backend

This backend supports an **Event Booking System**, built with **Node.js, Express, and MongoDB**. It handles all server-side operations: user registration, login, event management, ticket booking, and admin controls. Security and permissions are enforced for safe operation.

## Project Structure

- **models/**: MongoDB schemas for Users, Events, and Bookings.
- **controllers/**: Logic for handling requests and sending responses.
- **routes/**: URL endpoints linked to controllers (`/api/auth`, `/api/events`, `/api/bookings`).
- **middleware/**: Authentication and admin access checks.
- **utils/**: Helper functions (e.g., generating JWT tokens).

## Security & Environment

- Sensitive data is stored in a `.env` file:
  - `MONGO_URI` → MongoDB connection string
  - `PORT` → Server port
  - `JWT_SECRET` → Secret for JWT tokens
- Passwords are hashed before storing.
- JWT tokens protect private routes.
- **Important:** Keep `.env` secret — never push it to GitHub.

## Getting Started

1. **Install dependencies:**
```bash
npm install
