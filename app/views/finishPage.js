import FinishImage from "../components/finishImage";
import FinishScore from "../components/finishScore";
import GameOver from "../components/gameOver";
import { useStateValue } from "../contexts/useReducer";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function FinishPage({ totalPoints }) {
  const { points, dispatch } = useStateValue();

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
      <GameOver totalPoints={totalPoints} />
      <FinishImage />
      <FinishScore
        good={good}
        medium={medium}
        bad={bad}
        none={none}
        totalPoints={totalPoints}
      />
      <Button onClick={() => dispatch({ type: "reset" })}>Start again</Button>
    </motion.div>
  );
}
