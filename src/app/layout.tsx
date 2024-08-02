import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from "next/font/google";
import Theme from "./components/Theme";

const kanit = Kanit({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | AromaToes",
    template: "%s | AromaToes",
  },
  description:
    "Get your very own aroma-toes today; sweet, sour, spicy - you name it! (as long as its a fruit idk susu said no baby feet only fruits which i think is stupid but hey rules are rules)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="html-element" lang="en" className="dark">
      <body className={`${kanit.className}`}>
        <div className="w-screen h-screen overflow-x-hidden bg-light text-dark dark:bg-dark dark:text-light">
          <Theme />
          {children}
        </div>
      </body>
    </html>
  );
}
