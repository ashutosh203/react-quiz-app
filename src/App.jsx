import { useState } from "react";
import UserForm from "./pages/UserForm";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("form");

  const [score, setScore] = useState(
    Number(localStorage.getItem("quizScore")) || 0
  );

  return (
    <>
      {page === "form" && <UserForm setUser={setUser} setPage={setPage} />}
      {page === "quiz" && <Quiz setPage={setPage} setScore={setScore} />}
      {page === "result" && <Result score={score} setPage={setPage} />}
    </>
  );
}
