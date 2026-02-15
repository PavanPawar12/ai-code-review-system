// import { useState } from "react";
// import { reviewCode } from "../api/ai";

// function Home() {
//   const [code, setCode] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleReview = async () => {
//     if (!code) {
//       alert("Please enter code");
//       return;
//     }

//     setLoading(true);
//     setResponse("");

//     try {
//       const result = await reviewCode(code);
//       setResponse(result);
//     } catch (error) {
//       setResponse("Cannot connect to server");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">

//         <h1 className="text-2xl font-bold mb-4">AI Code Review</h1>

//         <textarea
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           placeholder="Paste your code here..."
//           className="w-full h-52 border p-3 rounded font-mono"
//         />

//         <button
//           onClick={handleReview}
//           className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
//         >
//           {loading ? "Analyzing..." : "Review Code"}
//         </button>

//         {response && (
//           <div className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-wrap break-words overflow-auto max-h-96">
//             <h2 className="font-semibold mb-2">AI Response:</h2>
//             {response}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;


import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reviewCode } from "../api/ai";

function Home() {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code) return alert("Enter code");

    setLoading(true);
    setResponse("");

    try {
      const result = await reviewCode(code);
      setResponse(result);
    } catch {
      setResponse("Server error. Make sure backend is running.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="text-center py-10">
        <h2 className="text-3xl font-bold mb-3">
          AI-Based Code Review System
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This system helps developers detect errors, improve code quality,
          and get best practice suggestions using Artificial Intelligence.
        </p>
      </section>

      {/* Code Review Section */}
      <section className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h3 className="text-xl font-semibold mb-4">
          Paste Your Code
        </h3>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="w-full h-48 border p-3 rounded font-mono"
        />

        <button
          onClick={handleReview}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
        >
          {loading ? "Analyzing..." : "Review Code"}
        </button>

        {response && (
          <div className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-wrap break-words overflow-auto max-h-96">
            <h4 className="font-semibold mb-2">AI Response:</h4>
            {response}
          </div>
        )}
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto py-10 px-6">
        <h3 className="text-2xl font-bold text-center mb-6">Features</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold">Error Detection</h4>
            <p className="text-sm text-gray-600">
              Detect syntax and logical errors in your code.
            </p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold">Best Practices</h4>
            <p className="text-sm text-gray-600">
              Get suggestions to improve code quality.
            </p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold">AI Suggestions</h4>
            <p className="text-sm text-gray-600">
              Improve performance and readability using AI.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-10 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">About Project</h3>
        <p className="max-w-3xl mx-auto text-gray-600">
          The AI Code Review System is developed as a B.Tech,BCA and all project to help
          students and developers improve their coding skills. It uses modern
          AI models to analyze code and provide intelligent feedback instantly.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
