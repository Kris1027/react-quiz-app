import { useEffect } from "react";

export default function Timer({ timeLeft, dispatch }) {
  useEffect(() => {
    const time = setInterval(() => {
      dispatch({ type: "decrementTime" });
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [dispatch]);

  const formatTime = (clock) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-cyan-200 text-center text-2xl font-bold font-tourney">
      {formatTime(timeLeft)}
    </div>
  );
}
