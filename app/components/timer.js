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

  return <div className="text-cyan-200 text-center">{timeLeft}</div>;
}
