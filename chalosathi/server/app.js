import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import webhookRoutes from "./routes/webhookRoutes.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    credentials: true,
  })
);

app.use(express.json());

// Import Routes
app.use("/api/users", userRoutes);

app.use("/api/webhooks", webhookRoutes);

export { app };
