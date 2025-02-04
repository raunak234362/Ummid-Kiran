/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Umeed Kiran{" "}
        </h1>
      
      </div>
    </div>
  );
}

export default HeroSection;
