import FinishImage from "../components/finishImage";
import FinishScore from "../components/finishScore";
import GameOver from "../components/gameOver";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function FinishPage({ points, dispatch, totalPoints, timeLeft }) {
  const good = points >= totalPoints * 0.8;
  const medium = points >= totalPoints * 0.5 && points < totalPoints * 0.8;
  const bad = points < totalPoints * 0.5 && points > 0;
  const none = points === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100vw" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.8,
      }}
      className="flex flex-col items-center"
    >
      <GameOver points={points} totalPoints={totalPoints} timeLeft={timeLeft} />
      <FinishImage />
      <FinishScore
        points={points}
        totalPoints={totalPoints}
        good={good}
        medium={medium}
        bad={bad}
        none={none}
      />
      <Button onClick={() => dispatch({ type: "reset" })}>Start again</Button>
    </motion.div>
  );
}
