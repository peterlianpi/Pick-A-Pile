/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";

function Answer({ answers }) {
  const navigate = useNavigate();
  const myAnswers = answers;
  const { id } = useParams();
  const selectedAnswer = myAnswers.find(
    (answer) => String(answer.AnswerId) === id
  );

  const backToHome = () => {
    navigate("..");
  };

  return (
    <div className="h-screen sm:w-[700px] sm:mx-auto">
      <h1 className="text-center font-semibold text-lg">
        {selectedAnswer.AnswerName}
      </h1>
      <div className="">
        <img
          className="w-72 h-96 mx-auto rounded-md"
          src={`/${selectedAnswer.AnswerImageUrl}`}
          alt={selectedAnswer.AnswerName}
        />
        <p className="text-md px-4 py-8">{selectedAnswer.AnswerDesp}</p>
      </div>
      <div className="bg-blue-600 py-2 px-4 w-36 rounded-lg mx-auto mb-4 text-white">
        <button onClick={() => backToHome()}>Back to Home</button>
      </div>
    </div>
  );
}
export default Answer;
