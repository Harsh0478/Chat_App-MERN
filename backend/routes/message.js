import express from "express";

import { protectRoute } from "../middleware/authMiddleware.js";
import { getUsersForSidebar } from "../controllers/Message.js";
import { getMessages } from "../controllers/Message.js";
import { sendMessage } from "../controllers/Message.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
