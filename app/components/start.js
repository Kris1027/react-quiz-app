"use client";

import { useReducer } from "react";
import { QuestionsList } from "./questions-list";

const initialState = {
  start: false,
  currentQuestion: 1,
  userAnswer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, start: true };
    case "next":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        userAnswer: null,
      };
    case "newAnswer":
      return {
        ...state,
        userAnswer: action.payload,
      };
    default:
      return state;
  }
};

export function Start({ questionsData, answersData }) {
  const [{ start, currentQuestion, userAnswer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const question = questionsData[currentQuestion - 1];
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
        <QuestionsList
          question={question}
          answer={answer}
          currentQuestion={currentQuestion}
          dispatch={dispatch}
          userAnswer={userAnswer}
        />
      )}
    </div>
  );
}
