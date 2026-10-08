import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/connectDB.js";
import { server, app } from "./config/socket.js";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const frontendUrl = process.env.FRONTEND_URL?.replace(/\/$/, "");

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

const corsOptions = {
  origin: frontendUrl || "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

// --- API ROUTES ---
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "mobile/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "mobile", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();

    server.listen(PORT, () => {
      console.log("Server is running on PORT: " + PORT);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
