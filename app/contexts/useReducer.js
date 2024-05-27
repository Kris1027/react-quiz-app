"use client";
import { createContext, useContext, useReducer } from "react";

const initialState = {
  start: false,
  currentQuestion: 1,
  userAnswer: null,
  points: 0,
  finish: false,
  timeLeft: 300,
  hasAnswered: false,
};

const StateContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, start: true };
    case "next":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        userAnswer: null,
        hasAnswered: false,
      };
    case "newAnswer":
      return {
        ...state,
        userAnswer: action.payload,
        hasAnswered: true,
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
    case "changeTime":
      return {
        ...state,
        timeLeft: action.payload,
      };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [{ ...state }, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
