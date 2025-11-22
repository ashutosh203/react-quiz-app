export default function Result({ score }) {
  const data = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-xl text-center w-96">
        <h1 className="text-2xl font-bold mb-3">Final Score</h1>

        <p className="text-lg mb-3">
          {data.name}, You scored <span className="text-blue-400">{score}</span>{" "}
          out of 10
        </p>

        <p className="text-sm opacity-70">Back is disabled. Quiz Finished.</p>
      </div>
    </div>
  );
}
