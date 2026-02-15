import axios from "axios";

const API_URL = "http://localhost:5000";

export const reviewCode = async (code) => {
  const res = await axios.post(`${API_URL}/ask`, {
    question: `Review this code and give errors and improvements:\n${code}`
  });

  return res.data.answer;
};
