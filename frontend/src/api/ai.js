import axios from "axios";

const API_URL = "https://ai-code-review-wuo6.onrender.com";

export const reviewCode = async (code) => {
  const res = await axios.post(`${API_URL}/ask`, {
    question: `Review this code and give errors and improvements:\n${code}`
  });

  return res.data.answer;
};
