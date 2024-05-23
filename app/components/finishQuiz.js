import { Button } from "../ui/button";
import FinishScore from "./finishScore";
import FinishImage from "./finishImage";

export function FinishQuiz({ points, dispatch, totalPoints, timeLeft }) {
  const good = points >= totalPoints * 0.8;
  const medium = points >= totalPoints * 0.5 && points < totalPoints * 0.8;
  const bad = points < totalPoints * 0.5 && points > 0;
  const none = points === 0;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-cyan-200 text-center">
        {timeLeft === 0 ? "You didn't finish in time!" : "Finish!"}
      </h1>
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
