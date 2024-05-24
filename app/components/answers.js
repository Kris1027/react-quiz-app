import clsx from "clsx";
import { motion } from "framer-motion";

export default function Answers({
  answer,
  question,
  userAnswer,
  hasAnswered,
  dispatch,
}) {
  return (
    <div className="grid grid-rows-4 gap-4 px-10">
      {answer.map((a) => (
        <motion.button
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.8,
          }}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: a.answer_id });
            if (a.answer_id === question.correct_option) {
              dispatch({ type: "addPoints", payload: a.points });
            }
          }}
          className={clsx(
            "text-cyan-100 text-sm lg:text-xl p-4 hover:scale-105 text-center border-4 rounded-lg",
            "shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_",
            a.answer_id === question.correct_option ? "#0f0" : "#f00",
            "]",
            a.answer_id === userAnswer ? "translate-x-4" : "",
            hasAnswered
              ? a.answer_id === question.correct_option
                ? "border-green-500 bg-green-500 bg-opacity-25 text-green-400"
                : "border-red-500 bg-red-500 bg-opacity-25 text-red-400"
              : "border-sky-200 bg-sky-200 bg-opacity-25"
          )}
          key={`${question.id}-${a.answer_id}`}
          disabled={hasAnswered}
        >
          {a.answer}
        </motion.button>
      ))}
    </div>
  );
}
