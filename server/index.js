// server/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const mongoose = require("mongoose");

// Import Mongoose model
const Message = require("./models/Message");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};

connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("API is running");
});

/*  
  AI ROUTE
*/
app.post("/api/ask-ai", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is empty" });

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
      }
    );

    const aiText = response.data.choices[0].message.content;
    res.json({ result: aiText });
  } catch (err) {
    console.error("FULL ERROR:", err.response?.data || err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

/*  
  SAVE MESSAGE ROUTE
*/
app.post("/api/save", async (req, res) => {
  try {
    const { prompt, response } = req.body;
    if (!prompt || !response)
      return res.status(400).json({ error: "Prompt or response missing" });

    const saved = await Message.create({ prompt, response });
    res.json({ success: true, saved });
  } catch (err) {
    console.error("SAVE ERROR:", err.message);
    res.status(500).json({ error: "Could not save message" });
  }
});

/*  
  START SERVER
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});