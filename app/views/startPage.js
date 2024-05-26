import { Button } from "../ui/button";
import { Logo } from "../components/logo";
import LogoImage from "../components/logoImage";
import StartDescription from "../components/startDescription";
import { motion } from "framer-motion";
import DifficultLevel from "../components/DifficultLevel";

export default function StartPage({ dispatch, timeLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.8,
      }}
      className="flex flex-col items-center text-center gap-6"
    >
      <Logo />
      <LogoImage />
      <StartDescription>
        Welcome in the quiz app where you can check your knowledge about React!
      </StartDescription>
      <div className="flex flex-col gap-4 items-center">
        <StartDescription>Select Your Difficulty Level</StartDescription>
        <DifficultLevel dispatch={dispatch} />
        <Button onClick={() => dispatch({ type: "start" })}>Start</Button>
      </div>
    </motion.div>
  );
}
