import clsx from "clsx";

export function QuestionsList({
  question,
  answer,
  dispatch,
  userAnswer,
  points,
}) {
  const hasAnswered = userAnswer !== null;

  return (
    <>
      {points > 0 && <p>Your score: {points}</p>}
      <h2 className="text-3xl p-5">{question.question}</h2>
      <div className="flex flex-col gap-4 items-center">
        {answer.map((a) => (
          <button
            onClick={() => {
              dispatch({ type: "newAnswer", payload: a.answer_id });
              if (a.answer_id === question.correct_option) {
                dispatch({ type: "addPoints", payload: a.points });
              }
            }}
            className={clsx(
              "text-white p-2 rounded-lg hover:scale-105 bg-green-500 w-1/3",
              a.answer_id === userAnswer ? "translate-x-10" : "",
              hasAnswered
                ? a.answer_id === question.correct_option
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-red-950"
            )}
            key={a.answer_id}
            disabled={hasAnswered}
          >
            {a.answer}
          </button>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "next" })}>Next</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
