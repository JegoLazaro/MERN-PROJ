import express from "express";
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.use("/api/notes", notesRoutes);

connectDB();

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
  console.log("Server started on PORT:",PORT);
});

// Graceful shutdown
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
