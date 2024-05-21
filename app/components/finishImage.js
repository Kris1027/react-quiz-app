import Image from "next/image";
import FinishImg from "@/public/finish.svg";

export default function FinishImage() {
  return (
    <div className="bounce-in-right py-10">
      <Image
        src={FinishImg}
        alt="finish flag"
        className="flash"
        width={200}
        height={200}
      />
    </div>
  );
}
