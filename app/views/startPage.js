import { Button } from "../ui/button";
import { Logo } from "../components/logo";
import LogoImage from "../components/logoImage";
import StartDescription from "../components/startDescription";
import { motion } from "framer-motion";

export default function StartPage({ dispatch }) {
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
      className="flex flex-col items-center justify-between text-center"
    >
      <Logo />
      <LogoImage />
      <StartDescription />
      <Button onClick={() => dispatch({ type: "start" })}>Start</Button>
    </motion.div>
  );
}
