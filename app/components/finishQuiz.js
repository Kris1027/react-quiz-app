import { Button } from "../ui/button";
import FinishScore from "./finishScore";
import FinishImage from "./finishImage";

export function FinishQuiz({ points, dispatch, totalPoints }) {
  const good = points >= totalPoints * 0.8;
  const medium = points >= totalPoints * 0.5 && points < totalPoints * 0.8;
  const bad = points < totalPoints * 0.5;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-cyan-200 text-center">Finish!</h1>
      <FinishImage />
      <FinishScore
        points={points}
        totalPoints={totalPoints}
        good={good}
        medium={medium}
        bad={bad}
      />
      <Button onClick={() => dispatch({ type: "reset" })}>Start again</Button>
    </div>
  );
}
