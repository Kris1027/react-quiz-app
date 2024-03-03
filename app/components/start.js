"use client";

import { useReducer } from "react";
import { QuestionItem } from "./question-item";

const initialState = {
  start: false,
  currentQuestion: 1,
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

export function Start({ questionsData, answersData }) {
  const [{ start, currentQuestion }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const question = questionsData[currentQuestion - 1].question;
  const answer = answersData.filter((a) => a.question_id === currentQuestion);

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
        <QuestionItem
          question={question}
          answer={answer}
          currentQuestion={currentQuestion}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
