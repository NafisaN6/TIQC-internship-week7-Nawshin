import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    console.log("User message:", userMessage);

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: userMessage,
    });

    console.log("FULL RESPONSE:", response);

    const reply =
      response.output?.[0]?.content?.[0]?.text ||
      response.output_text ||
      "No response";

    res.json({ reply });

  } catch (error) {
  console.error("🔥 FULL ERROR:", error);
  res.status(500).json({ error: error.message });
}
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});