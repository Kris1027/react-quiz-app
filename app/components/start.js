"use client";

import { useReducer } from "react";
import Question from "./questions";

const initialState = {
  start: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, start: true };
  }
};

export function Start({ quizData }) {
  const [{ start }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {!start && (
        <>
          <h2>
            Welcome in the quiz app where you can check your knowledge about
            React!
          </h2>
          <button onClick={() => dispatch({ type: "start" })}>Start</button>
        </>
      )}
      {start && <Question />}
    </div>
  );
}
