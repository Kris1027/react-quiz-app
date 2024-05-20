"use client";
import Image from "next/image";
import { useReducer } from "react";
import { QuestionsList } from "./questionsList";

import ReactImg from "@/public/react.svg";
import { Button } from "../ui/button";

const initialState = {
  start: false,
  currentQuestion: 1,
  userAnswer: null,
  points: 0,
  finish: false,
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
    default:
      return state;
  }
};

export function Start({ questionsData, answersData }) {
  const [{ start, currentQuestion, userAnswer, points, finish }, dispatch] =
    useReducer(reducer, initialState);

  const question = questionsData[currentQuestion - 1];
  const answer = answersData.filter((a) => a.question_id === currentQuestion);

  const totalPoints = answersData
    .map((a) => a.points)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="flex flex-col">
      {!start && (
        <div className="flex flex-col items-center justify-center text-center">
          <a href="https://react.dev" target="_blank">
            <Image
              src={ReactImg}
              alt="React logo"
              className="animate-spin-slow"
              width={300}
              height={300}
            />
          </a>
          <h2 className="text-xl text-cyan-100 pt-20">
            Welcome in the quiz app where you can check your knowledge about
            React!
          </h2>
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
        />
      )}
    </div>
  );
}
