"use client";
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  start: false,
  currentQuestion: 1,
  userAnswer: null,
  points: 0,
  finish: false,
  timeLeft: 300,
  hasAnswered: false,
  music: true,
};

const StateContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      if (state.music) {
        document.getElementById("start-sound").play();
      } else {
        document.getElementById("start-sound").pause();
      }
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
      if (state.music) {
        document.getElementById("finish-sound").play();
      } else {
        document.getElementById("finish-sound").pause();
      }
      return { ...state, finish: true };
    case "decrementTime":
      if (state.timeLeft <= 0) {
        if (state.music) {
          document.getElementById("finish-sound").play();
        } else {
          document.getElementById("finish-sound").pause();
        }
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

  useEffect(() => {
    const musicSound = document.getElementById("music-sound");
    if (state.music) {
      musicSound.play();
    } else {
      musicSound.pause();
    }
  }, [state.music]);

  return (
    <StateContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
      <audio id="start-sound" src="/start.mp3" />
      <audio id="finish-sound" src="/finish.mp3" />
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
