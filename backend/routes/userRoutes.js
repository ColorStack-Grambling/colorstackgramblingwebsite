import express from "express"
import { protect, isExecutive } from "../middleware/authMiddleware.js"

import { registerUser, loginUser, getUsers, updateUser, deleteUser, validateRegisterUser } from '../controllers/userController.js';  
const router = express.Router();

// Public Routes
router.post("/register", validateRegisterUser, registerUser);
router.post("/login", loginUser);

// Protected Routes
router.get("/", protect, isExecutive, getUsers);
router.put("/:id", protect, isExecutive, updateUser);
router.delete("/:id", protect, isExecutive, deleteUser);

export default router;
