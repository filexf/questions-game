import React, { useState } from "react";
import { questionData } from "./data/questions";

const App: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  const handleAnswer = (answer: "yes" | "no") => {
    setResponse(questionData.answers[answer]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl border border-blue-100">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 text-center">
          Questions Game
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Answer the question below by clicking a button.
        </p>
        <div className="transition-all duration-300">
          <h2 className="text-xl font-bold mb-6 text-center border-b pb-4 border-gray-200">
            {questionData.question}
          </h2>
          {!response ? (
            <div className="flex gap-6 justify-center mt-4">
              <button
                className="px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                onClick={() => handleAnswer("yes")}
              >
                Yes
              </button>
              <button
                className="px-8 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                onClick={() => handleAnswer("no")}
              >
                No
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 justify-center items-center animate-fade-in">
              <p
                className={`flex justify-center text-2xl font-semibold text-center ${
                  response === questionData.answers.yes
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {response}
              </p>
              <button
                className="flex items-center gap-2 mt-2 px-4 py-2 bg-white border border-blue-400 text-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition text-base"
                onClick={() => setResponse(null)}
                title="Reset question"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5L19.5 4.5M4.5 4.5l15 15"
                  />
                </svg>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
      <footer className="w-full text-center py-6 text-gray-400 text-sm font-medium">
        Made with <span className="mx-1">❤️</span> by Félix Orain using React,
        Typescript and Tailwind
      </footer>
    </div>
  );
};

export default App;
