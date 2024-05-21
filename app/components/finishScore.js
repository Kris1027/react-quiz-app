export default function FinishScore({
  points,
  totalPoints,
  good,
  medium,
  bad,
}) {
  return (
    <p className="text-lg text-cyan-100 text-center pb-10">
      {good && (
        <span className="text-green-500">
          Perfect! You have earned <span className="font-bold">{points}</span>{" "}
          points from <span className="font-bold">{totalPoints}</span> total!
        </span>
      )}
      {medium && (
        <span className="text-amber-400">
          Not bad! You have earned <span className="font-bold">{points}</span>{" "}
          points from <span className="font-bold">{totalPoints}</span> total!
        </span>
      )}
      {bad && (
        <span className="text-red-500">
          You need to work more... You have earned only{" "}
          <span className="font-bold">{points}</span> points from{" "}
          <span className="font-bold">{totalPoints}</span> total!
        </span>
      )}
    </p>
  );
}
