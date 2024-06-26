"use client";
import { useStateValue } from "../contexts/useReducer";
import { motion } from "framer-motion";
import { Logo } from "../components/logo";
import LogoImage from "../components/logoImage";
import DifficultLevel from "../components/DifficultLevel";
import Description from "../ui/description";
import { Button } from "../ui/button";
import SoundSwitcher from "../components/soundSwitcher";

export default function StartPage() {
  const { dispatch } = useStateValue();

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
      <Description>
        Welcome in the quiz app where you can check your knowledge about React!
      </Description>
      <div className="flex flex-col gap-4 lg:flex-row w-full justify-between items-center">
        <SoundSwitcher />
        <DifficultLevel />
        <Button onClick={() => dispatch({ type: "start" })}>Start</Button>
      </div>
    </motion.div>
  );
}
