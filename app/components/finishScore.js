import { useStateValue } from "../contexts/useReducer";
import Score from "./score";

export default function FinishScore({ good, medium, bad, none }) {
  const { points, totalPoints } = useStateValue();
  return (
    <p className="text-md lg:text-2xl text-[var(--primaryText)] text-center p-10">
      {good && (
        <Score points={points} totalPoints={totalPoints}>
          Perfect! You have earned
        </Score>
      )}
      {medium && (
        <Score points={points} totalPoints={totalPoints}>
          Not bad! You have earned
        </Score>
      )}
      {bad && (
        <Score points={points} totalPoints={totalPoints}>
          You need to learn more... You have earned only
        </Score>
      )}
      {none && (
        <Score points={points} totalPoints={totalPoints}>
          What are you doing? All question are wrong...
        </Score>
      )}
    </p>
  );
}
