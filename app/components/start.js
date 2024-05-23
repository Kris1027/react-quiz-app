"use client";
import { useReducer } from "react";
import { QuestionsList } from "./questionsList";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import LogoImage from "./logoImage";
import StartDescription from "./startDescription";

const initialState = {
  start: false,
  currentQuestion: 1,
  userAnswer: null,
  points: 0,
  finish: false,
  timeLeft: 120,
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
    case "addPoints":
      return { ...state, points: state.points + action.payload };
    case "reset":
      return initialState;
    case "finish":
      return { ...state, finish: true };
    case "decrementTime":
      if (state.timeLeft <= 0) {
        return { ...state, finish: true };
      }
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    default:
      return state;
  }
};

export function Start({ questionsData, answersData }) {
  const [
    { start, currentQuestion, userAnswer, points, finish, timeLeft },
    dispatch,
  ] = useReducer(reducer, initialState);

  const question = questionsData[currentQuestion - 1];
  const answer = answersData.filter((a) => a.question_id === currentQuestion);

  const totalPoints = answersData
    .map((a) => a.points)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      {!start && (
        <div className="flex flex-col items-center justify-between text-center">
          <Logo />
          <LogoImage />
          <StartDescription />
          <Button onClick={() => dispatch({ type: "start" })}>Start</Button>
        </div>
      )}
      {start && (
        <QuestionsList
          questionsData={questionsData}
          question={question}
          answer={answer}
          currentQuestion={currentQuestion}
          dispatch={dispatch}
          userAnswer={userAnswer}
          points={points}
          finish={finish}
          totalPoints={totalPoints}
          timeLeft={timeLeft}
        />
      )}
    </>
  );
}
