import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/items", itemRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));