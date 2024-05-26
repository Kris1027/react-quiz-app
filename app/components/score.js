import { useStateValue } from "../contexts/useReducer";
import { generateRedToGreenColor } from "../utils/generateRedToGreenColor";

export default function Score({ children }) {
  const { points, totalPoints } = useStateValue();
  return (
    <span style={{ color: generateRedToGreenColor(points, totalPoints) }}>
      {children} <span className="font-bold font-tourney">{points}</span> points
      from <span className="font-bold font-tourney">{totalPoints}</span> total!
    </span>
  );
}
