import express from "express";
import {
  login,
  register,
  logout,
  updateProfile,
  checkAuth,
} from "../controllers/Auth.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);

// Protected Routes
router.post("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);

export default router;
