import clsx from "clsx";
import { FinishQuiz } from "./finishQuiz";
import { Button } from "../ui/button";

export function QuestionsList({
  questionsData,
  question,
  answer,
  dispatch,
  userAnswer,
  points,
  finish,
}) {
  const hasAnswered = userAnswer !== null;

  const finishQuestions = questionsData.length === question.id && hasAnswered;

  return (
    <>
      {!finish ? (
        <div className="w-3/5">
          <div className="flex flex-col items-center text-cyan-100">
            <p>
              {question.id} from {questionsData.length}
            </p>
            <progress value={question.id} max={questionsData.length} />
            <p>Your score: {points}</p>
          </div>
          <h2 className="text-3xl font-bold p-5 text-cyan-100">
            {question.question}
          </h2>
          <div className="grid grid-rows-4 gap-10">
            {answer.map((a) => (
              <button
                onClick={() => {
                  dispatch({ type: "newAnswer", payload: a.answer_id });
                  if (a.answer_id === question.correct_option) {
                    dispatch({ type: "addPoints", payload: a.points });
                  }
                }}
                className={clsx(
                  "text-cyan-100 text-xl py-10 px-20 hover:scale-105 text-center border-4 rounded-lg",
                  "shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_",
                  a.answer_id === question.correct_option ? "#0f0" : "#f00",
                  "]",
                  a.answer_id === userAnswer ? "translate-x-10" : "",
                  hasAnswered
                    ? a.answer_id === question.correct_option
                      ? "border-green-500 bg-green-500 bg-opacity-25 text-green-400"
                      : "border-red-500 bg-red-500 bg-opacity-25 text-red-400"
                    : "border-sky-200 bg-sky-200 bg-opacity-25"
                )}
                key={a.answer_id}
                disabled={hasAnswered}
              >
                {a.answer}
              </button>
            ))}
          </div>
          <div className="flex justify-between w-full">
            {!finishQuestions ? (
              <>
                <Button
                  onClick={() => dispatch({ type: "next" })}
                  disabled={!hasAnswered}
                >
                  Next
                </Button>
                <Button onClick={() => dispatch({ type: "reset" })}>
                  Reset
                </Button>
              </>
            ) : (
              <Button onClick={() => dispatch({ type: "finish" })}>
                Finish
              </Button>
            )}
          </div>
        </div>
      ) : (
        <FinishQuiz points={points} dispatch={dispatch} />
      )}
    </>
  );
}
