"use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { FiUser, FiMonitor } from "react-icons/fi"
import HeroSection from "./landing/hero/HeroSection"
import About from "./landing/about/About"
import Vision from "./landing/vision/Vision"
import Mission from "./landing/mission/Mission"
import Service from "./landing/service/Service"
import Founder from "./landing/founder/Founder"
import Contact from "./landing/contact/Contact"
// import { Button } from "./ui/button"
import CoreTeam from "./landing/team/CoreTeam"

const LandingPage = () => {
  // const router = useRouter()
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  // const [isDashboardExpanded, setIsDashboardExpanded] = useState(false)

  return (
    <div className="relative">
      {/* User Dropdown */}
      {/* <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 rounded-full bg-sky-800 text-white hover:bg-sky-700 transition-colors"
          >
            <FiUser size={24} />
          </Button>

          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <div className="px-4 py-2 text-sm text-gray-700 border-b flex items-center">
                <FiUser className="mr-2" /> Siddharth
              </div>
              <button
                onClick={() => router.push("/dashboard")}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <FiMonitor className="mr-2" /> Dashboard
              </button>
             
            </div>
          )}
        </div>
      </div> */}

      {/* Main Content */}
      <main className="min-h-screen">
        <HeroSection />
        <About />
        <Vision />
        <Mission />
        <Service />
        <Founder />
        <CoreTeam/>
        <Contact />
      </main>
    </div>
  )
}

export default LandingPage

