import BeeSvg from "@/utils/BeeSvg";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col text-center justify-center h-screen bg-[#13141C] text-darkText gap-5">
      <BeeSvg
        width={70}
        className="mx-auto"
        animationStr={"10s"}
        auto={"mx-auto"}
      />
      <h1 className="font-bold text-2xl">Welcome to the Spelling Bee Game</h1>

      <p>This project was created by Batuhan Sena Sert.</p>
      <div className="flex flex-row w-full justify-around font-bold gap-4 md:w-[400px] md:mx-auto">
        <Link
          href="https://github.com/BSenaS/spelling-bee"
          target="blank"
          className="flex items-center justify-center gap-2 w-5/12 py-3 bg-[#383838] rounded-md hover:bg-[#E1E1FF] hover:text-[#000000] transition duration-300 ease-in-out"
        >
          Github
          <FaGithub />
        </Link>

        <Link
          href={"/en"}
          className="w-5/12 py-3 bg-[#383838] rounded-md hover:bg-[#E1E1FF] hover:text-[#000000] transition duration-300 ease-in-out"
        >
          PLAY
        </Link>
      </div>
    </div>
  );
}
