// require('dotenv').config();
// const app = require('./src/app')

// // console.log(process.env.GOOGLE_API_KEY);

// console.log("-------------------------------------->>>>>>>",process.env.GOOGLE_GEMINI_KEY)

// app.listen(3000, () =>{
//     console.log(`Server is runnning on http://localhost:3000 `)
// })


// import express from "express";
// import OpenAI from "openai";
// import dotenv from "dotenv";
 
// dotenv.config();
// console.log("-------------------------->>>>>",process.env.OPENAI_API_KEY)

// const app = express();
// app.use(express.json());

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// app.post("/ask", async (req, res) => {
//   const { question } = req.body;

//   try {
//     const response = await client.responses.create({
//       model: "gpt-4.1-mini",
//       input: question
//     });

//     res.json({ answer: response.output_text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log("OpenRouter Key:", process.env.OPENROUTER_API_KEY);

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-3-8b-instruct",
        messages: [
          {
            role: "user",
            content: question
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000",
          "X-Title": "AI Code Review App"
        }
      }
    );

    const answer =
      response.data?.choices?.[0]?.message?.content ||
      "No response from AI";

    res.json({ answer });

  } catch (error) {
    console.error("Full Error:", error.response?.data || error.message);

    res.status(500).json({
      error: error.response?.data || error.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
