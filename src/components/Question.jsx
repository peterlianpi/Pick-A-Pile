/* eslint-disable react/prop-types */

import { Link, useParams, useNavigate } from "react-router-dom";

function Question({ piles }) {
  const questions = piles.questions;
  const answers = piles.answers;
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedQuestion = questions.find(
    (question) => String(question.QuestionId) === id
  );

  const selectedAnswer = answers.filter(
    (answer) => String(answer.QuestionId) === id
  );

  const backToHome = () => {
    navigate("..");
  };

  return (
    <section className="sm:max-w-[700px] sm:h-screen sm:mx-auto">
      <div className="m-4">
        <p className="text-md font-semibold py-4 text-center">
          {selectedQuestion.QuestionName}
        </p>
        <p className="text-md py-4 text-sm">{selectedQuestion.QuestionDesp}</p>
      </div>
      <div className="flex flex-wrap gap-2 m-4 py-4 sm:grid sm:grid-cols-4">
        {selectedAnswer.map((answer, i) => (
          <div key={i}>
            <Link to={`/question/${answer.AnswerId}`}>
              <div>
                <p className="absolute bg-slate-400 px-2 py-1 rounded-md">
                  {answer.AnswerName}
                </p>
              </div>
              <div className="h-full">
                <img
                  src={`/${answer.AnswerImageUrl}`}
                  alt="Pile Images"
                  className="h-60 w-40 object-fill rounded-md"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-blue-600 py-2 px-4 w-36 rounded-lg mx-auto mb-4 text-white">
        <button onClick={() => backToHome()}>Back to Home</button>
      </div>
    </section>
  );
}
export default Question;
