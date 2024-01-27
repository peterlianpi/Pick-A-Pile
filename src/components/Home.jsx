import { Link } from "react-router-dom";
import Questions from "./Questions";

/* eslint-disable react/prop-types */
function Home({ questions }) {
  return (
    <main className="sm:w-[700px] sm:mx-auto text-white">
      <h1 className="text-lg font-semibold text-center my-4 p-2 bg-slate-400 rounded-full w-40 mx-auto">
        Pick A Pile
      </h1>

      {questions.map((question, i) => (
        <Link key={i} to={`/${question.QuestionId}`}>
          <Questions question={question} />
        </Link>
      ))}
    </main>
  );
}
export default Home;
