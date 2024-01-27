/* eslint-disable react/prop-types */
function Questions({ question }) {
  return (
    <div className="h-20 p-4 bg-slate-600 m-2 text-sm rounded-md">
      {question.QuestionName} <br />
    </div>
  );
}
export default Questions;
