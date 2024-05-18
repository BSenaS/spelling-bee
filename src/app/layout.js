import { Inter } from "next/font/google";
import "./globals.css";
import GameContextProvider from "@/context/GameContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spelling Bee Game",
  description: "Spelling Bee Game, made by Batuhan Sena Sert.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameContextProvider>{children}</GameContextProvider>
      </body>
    </html>
  );
}
