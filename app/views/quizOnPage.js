import { useStateValue } from "../contexts/useReducer";
import { motion } from "framer-motion";
import { FinishPage } from "./finishPage";
import AnswersList from "../components/answersList";
import Progress from "../components/progress";
import QuestionItem from "../components/questionItem";
import Timer from "../components/timer";
import { Button } from "../ui/button";

export default function QuizOnPage({
  question,
  answer,
  totalPoints,
  questionsData,
}) {
  const { finish, dispatch, userAnswer } = useStateValue();

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
          className="w-full lg:w-1/2"
        >
          <Progress question={question} questionsData={questionsData} />
          <Timer />
          <QuestionItem question={question} />
          <AnswersList
            answer={answer}
            question={question}
            hasAnswered={hasAnswered}
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
        <FinishPage totalPoints={totalPoints} />
      )}
    </>
  );
}
