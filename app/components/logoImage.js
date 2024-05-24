import Image from "next/image";
import ReactImg from "@/public/react.svg";

export default function LogoImage() {
  return (
    <a
      className="py-10 bounce-in-right"
      href="https://react.dev"
      target="_blank"
    >
      <Image
        src={ReactImg}
        alt="React logo"
        className="animate-spin-slow"
        width={200}
        height={200}
      />
    </a>
  );
}
