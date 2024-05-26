import clsx from "clsx";
import { motion } from "framer-motion";

export default function AnswerItem({
  item,
  question,
  userAnswer,
  hasAnswered,
  dispatch,
}) {
  return (
    <motion.button
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: item.answer_id === userAnswer ? 20 : 0 }}
      whileHover={hasAnswered ? { scale: 1 } : { scale: 1.1 }}
      whileTap={hasAnswered ? { scale: 1 } : { scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.8,
      }}
      onClick={() => {
        dispatch({ type: "newAnswer", payload: item.answer_id });
        if (item.answer_id === question.correct_option) {
          dispatch({ type: "addPoints", payload: item.points });
        }
      }}
      className={clsx(
        "text-[var(--primaryText)] w-full text-sm lg:text-2xl px-2 py-1 lg:px-8 lg:py-4 text-center border-4 rounded-lg",
        "shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_",
        item.answer_id === question.correct_option ? "#0f0" : "#f00",
        "]",
        hasAnswered
          ? item.answer_id === question.correct_option
            ? "border-green-500 bg-green-500 bg-opacity-25 text-green-400"
            : "border-red-500 bg-red-500 bg-opacity-25 text-red-400"
          : "border-sky-200 bg-sky-200 bg-opacity-25"
      )}
      disabled={hasAnswered}
    >
      {item.answer}
    </motion.button>
  );
}
