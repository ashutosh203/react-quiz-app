import { useState } from "react";

export default function UserForm({ setUser, setPage }) {
  const [data, setData] = useState({
    name: "",
    age: "",
    city: "",
    country: "",
  });

  const handleSubmit = () => {
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUser(data);

    // go to quiz page
    setPage("quiz");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-xl w-96 space-y-4">
        <h1 className="text-2xl font-bold text-center">Enter Your Details</h1>

        <input
          className="w-full p-2 rounded text-black"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          className="w-full p-2 rounded text-black"
          placeholder="Age"
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />

        <input
          className="w-full p-2 rounded text-black"
          placeholder="City"
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />

        <input
          className="w-full p-2 rounded text-black"
          placeholder="Country"
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />

        <button
          className="w-full bg-blue-500 p-2 rounded mt-3"
          onClick={handleSubmit}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
