import HeroSection from "./landing/hero/HeroSection";
// import Navbar from "./landing/navbar/Navbar";
import About from "./landing/about/About";
import Vision from "./landing/vision/Vision";
import Mission from "./landing/mission/Mission";
import Service from "./landing/service/Service";
import Founder from "./landing/founder/Founder";
import Contact from "./landing/contact/Contact";
// import Footer from "./landing/footer/Footer";
function LandingPage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <About />
      <Vision />
      <Mission />
      <Service />
      <Founder />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default LandingPage;
