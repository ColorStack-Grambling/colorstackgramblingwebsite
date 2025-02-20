const express = require("express");
const {
  registerUser,
  loginUser,
  validateRegisterUser,
  updateUser,
  deleteUser,
  getUsers,
  refreshToken,
  logoutUser,
  changePassword,
  addUser,
} = require("../controllers/userController");

const { protect, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
// Only admins should have access to the register route
router.post("/register", validateRegisterUser, registerUser);
router.post("/login", loginUser);

// Refreshing access token
router.post("/refresh-token", refreshToken);

// Protected Routes
router.get("/", protect, isAdmin, getUsers);
router.put("/:id", protect, isAdmin, updateUser);
router.delete("/:id", protect, isAdmin, deleteUser);
router.post("/add-user", protect, isAdmin, addUser);

// Logout and Change password
router.post("/logout", protect, logoutUser)
router.post("/change-password", protect, changePassword)

module.exports = router;
