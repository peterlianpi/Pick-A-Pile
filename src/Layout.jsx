import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { PileContext } from "./components/PileContext";
import Home from "./components/Home";
import Question from "./components/Question";
import Answer from "./components/Answer";

function Layout() {
  const piles = useContext(PileContext);
  const questions = piles.questions;
  const answers = piles.answers;

  return (
    <Routes>
      <Route path="*" element={<Home questions={questions} />} />
      <Route path="/:id" element={<Question piles={piles} />} />
      <Route path="/question/:id" element={<Answer answers={answers} />} />
    </Routes>
  );
}
export default Layout;
