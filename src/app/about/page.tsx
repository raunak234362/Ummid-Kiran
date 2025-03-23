import React from "react";
import About from "@/components/landing/about/About";
import Founder from "@/components/landing/founder/Founder";
import ChiefSecy from "@/components/about/ChiefSecy";
import Secy from "@/components/about/Secy";
import MemberOne from "@/components/about/MemberOne";
import MemberTwo from "@/components/about/MemberTwo";

function page() {
  return (
    <div className="w-full mx-auto">
      <About />
      <Founder />
      {/* <div className="flex justify-evenly">
        <ChiefSecy />
        <Secy />
        </div> */}
       <div className="grid md:grid-cols-4 max-sm:grid-cols-1 gap-2">
        <ChiefSecy />
        <Secy />
        <MemberOne />
        <MemberTwo />
      </div>
    </div>
  );
}

export default page;
