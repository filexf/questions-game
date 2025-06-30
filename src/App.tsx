import React, { useState } from "react";
import { questionData } from "./data/questions";

const App: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  const handleAnswer = (answer: "yes" | "no") => {
    setResponse(questionData.answers[answer]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">{questionData.question}</h1>
        {!response ? (
          <div className="flex gap-8 justify-center">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
              onClick={() => handleAnswer("yes")}
            >
              Yes
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => handleAnswer("no")}
            >
              No
            </button>
          </div>
        ) : (
          <p className="text-lg font-semibold">{response}</p>
        )}
      </div>
    </div>
  );
};

export default App;
