import FinishImage from "../components/finishImage";
import FinishScore from "../components/finishScore";
import GameOver from "../components/gameOver";
import { Button } from "../ui/button";
import { generateRedToGreenColor } from "../utils/generateRedToGreenColor";

export function FinishPage({ points, dispatch, totalPoints, timeLeft }) {
  const good = points >= totalPoints * 0.8;
  const medium = points >= totalPoints * 0.5 && points < totalPoints * 0.8;
  const bad = points < totalPoints * 0.5 && points > 0;
  const none = points === 0;

  return (
    <div className="flex flex-col items-center">
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
    </div>
  );
}
