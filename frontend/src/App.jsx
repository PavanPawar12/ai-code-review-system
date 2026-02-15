// import { useState } from "react";
// import axios from "axios";

// function App() {
//   const [code, setCode] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!code) {
//       alert("Please enter code or question");
//       return;
//     }
//     try {
//       setLoading(true);
//       setResponse("");

//       const res = await axios.post("http://localhost:5000/ask", {
//         question: `Review this code and tell errors and improvements:\n${code}`
//       });

//       setResponse(res.data.answer);
//     } catch (error) {
//       console.error(error);
//       setResponse("Error connecting to server");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>AI Code Review</h1>

//       <textarea
//         placeholder="Paste your code here..."
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         style={styles.textarea}
//       />

//       <button onClick={handleSubmit} style={styles.button}>
//         {loading ? "Analyzing..." : "Review Code"}
//       </button>

//       {response && (
//         <div style={styles.result}>
//           <h3>AI Response:</h3>
//           <pre>{response}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "800px",
//     margin: "40px auto",
//     fontFamily: "Arial"
//   },
//   textarea: {
//     width: "100%",
//     height: "200px",
//     padding: "10px",
//     fontSize: "14px"
//   },
//   button: {
//     marginTop: "10px",
//     padding: "10px 20px",
//     fontSize: "16px",
//     cursor: "pointer"
//   },
//   result: {
//     marginTop: "20px",
//     background: "#f4f4f4",
//     padding: "15px",
//     whiteSpace: "pre-wrap"
//   }
// };

// export default App;

import Home from "./pages/Home.jsx";

function App() {
  return <Home />;
}

export default App;
