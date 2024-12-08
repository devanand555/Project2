// routes/itemRoutes.js
import express from "express";
import { createItem } from "../controllers/itemController.js";

const router = express.Router();

// Route to create an item
router.post("/", createItem);

export default router;
