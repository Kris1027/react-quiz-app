import AnswersList from "../components/answersList";
import Progress from "../components/progress";
import Timer from "../components/timer";
import { Button } from "../ui/button";
import { FinishPage } from "./finishPage";
import { motion } from "framer-motion";

export function QuizOn({
  questionsData,
  question,
  answer,
  dispatch,
  userAnswer,
  points,
  finish,
  totalPoints,
  timeLeft,
}) {
  const hasAnswered = userAnswer !== null;

  const finishQuestions = questionsData.length === question.id && hasAnswered;

  return (
    <>
      {!finish ? (
        <motion.div
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.8,
          }}
        >
          <Progress
            question={question}
            questionsData={questionsData}
            points={points}
          />
          <Timer timeLeft={timeLeft} dispatch={dispatch} />
          <h2 className="text-xl text-center font-bold p-5 text-cyan-100">
            {question.question}
          </h2>
          <AnswersList
            answer={answer}
            question={question}
            userAnswer={userAnswer}
            hasAnswered={hasAnswered}
            dispatch={dispatch}
          />
          <div className="flex justify-between w-full pt-10 px-4">
            {!finishQuestions ? (
              <>
                <Button onClick={() => dispatch({ type: "reset" })}>
                  Reset
                </Button>
                <Button
                  onClick={() => dispatch({ type: "next" })}
                  disabled={!hasAnswered}
                >
                  Next
                </Button>
              </>
            ) : (
              <Button onClick={() => dispatch({ type: "finish" })}>
                Finish
              </Button>
            )}
          </div>
        </motion.div>
      ) : (
        <FinishPage
          points={points}
          dispatch={dispatch}
          totalPoints={totalPoints}
          timeLeft={timeLeft}
        />
      )}
    </>
  );
}
