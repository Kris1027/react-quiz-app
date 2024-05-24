import { Logo } from "./components/logo";
import "./globals.css";
import Wrapper from "./ui/wrapper";
import { Poppins } from "next/font/google";
import { Tourney } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--poppins-font",
});

const tourney = Tourney({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--tourney-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${tourney.variable}`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
