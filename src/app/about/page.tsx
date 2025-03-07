import React from "react";
import About from "@/components/landing/about/About";
import Founder from "@/components/landing/founder/Founder";
import ChiefSecy from "@/components/about/ChiefSecy";
import Secy from "@/components/about/Secy";
import MemberOne from "@/components/about/MemberOne";
import MemberTwo from "@/components/about/MemberTwo";

function page() {
  return (
    <div>
      <About />
      <Founder />
      <ChiefSecy />
      {/* <div className="flex justify-evenly">
        <ChiefSecy />
        <Secy />
      </div> */}
      <div className="flex justify-evenly">
        <Secy />
        <MemberOne />
        <MemberTwo />
      </div>
    </div>
  );
}

export default page;
