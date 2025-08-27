const express = require("express");
const { getUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

//  Get all users (admin only)
router.get("/", protect, admin, getUsers);

//  Get single user by ID
router.get("/:id", protect, getUserById);

//  Update user
router.put("/:id", protect, updateUser);

//  Delete user (admin only)
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;
