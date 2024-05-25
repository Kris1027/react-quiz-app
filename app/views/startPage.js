import { Button } from "../ui/button";
import { Logo } from "../components/logo";
import LogoImage from "../components/logoImage";
import StartDescription from "../components/startDescription";

export default function StartPage({ dispatch }) {
  return (
    <div className="flex flex-col items-center justify-between text-center">
      <Logo />
      <LogoImage />
      <StartDescription />
      <Button onClick={() => dispatch({ type: "start" })}>Start</Button>
    </div>
  );
}
