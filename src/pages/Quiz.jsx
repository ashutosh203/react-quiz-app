import { useState, useEffect } from "react";
import { questions } from "../data";

export default function Quiz({ setPage, setScore }) {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(60);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const t = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleSubmit();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const handleOption = (option) => {
    setAnswers({ ...answers, [index]: option });
  };

  const next = () => {
    if (index < questions.length - 1) setIndex(index + 1);
  };

  const back = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleSubmit = () => {
    let sc = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) sc++;
    });

    localStorage.setItem("quizScore", sc);
    setScore(sc);
    setPage("result");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-xl mb-3">Time Left: {timer}s</h1>

      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-xl">
        <h2 className="text-lg mb-4">
          Q{index + 1}. {questions[index].question}
        </h2>

        {questions[index].options.map((op) => (
          <button
            key={op}
            className={`w-full p-2 my-2 rounded ${
              answers[index] === op ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => handleOption(op)}
          >
            {op}
          </button>
        ))}

        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-600 px-4 py-2 rounded"
            onClick={back}
            disabled={index === 0}
          >
            Back
          </button>

          {index === questions.length - 1 ? (
            <button
              className="bg-green-600 px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button className="bg-blue-600 px-4 py-2 rounded" onClick={next}>
              Skip / Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
