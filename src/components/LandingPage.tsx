/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import HeroSection from "./hero/HeroSection";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Vision from "./vision/Vision";
import Mission from "./mission/Mission";
import Service from "./service/Service";
import Founder from "./founder/Founder";
function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Vision />
      <Mission />
      <Service />
      <Founder/>
    </>
  );
}

export default LandingPage;
