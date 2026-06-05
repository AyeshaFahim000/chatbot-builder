import express from "express";
import * as userController from "../controllers/userController.js";
import {
  getUserProfile,
  getUserById,
  updateUserProfile,
  deleteUser,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile", protect, getUserProfile);

router.put("/profile", protect, updateUserProfile);

router.get("/:id", protect, getUserById);

router.delete("/:id", protect, deleteUser);
export default router;
