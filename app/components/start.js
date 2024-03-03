"use client";

import { useReducer } from "react";
import Question from "./questions";

const initialState = {
  start: false,
  currentQuestion: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, start: true };
    case "next":
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    default:
      return state;
  }
};

export function Start({ quizData }) {
  const [{ start, currentQuestion }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const question = quizData[currentQuestion].question;
  const answerA = quizData[currentQuestion].answer_a;
  const answerB = quizData[currentQuestion].answer_b;
  const answerC = quizData[currentQuestion].answer_c;
  const answerD = quizData[currentQuestion].answer_d;

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
      {start && (
        <Question
          question={question}
          answerA={answerA}
          answerB={answerB}
          answerC={answerC}
          answerD={answerD}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
