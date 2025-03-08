import { Instagram, Phone, LinkIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white bottom-0">
    <div className="">
      <div className=" max-w-6xl py-10 lg:px-0 px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Organization Info */}
        <div className="space-y-4">
          <h2 className="text-yellow-400 text-xl font-semibold">
            Umeed Kiran
          </h2>
          <p className="text-gray-300">
            Special School and Rehabilitation Center
          </p>
          <p className="text-gray-300">Established: 2014</p>
          <a
            href="https://instagram.com"
            className="inline-block text-gray-300 hover:text-yellow-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-yellow-400 text-xl font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-300">Physiotherapy</li>
            <li className="text-gray-300">Speech Therapy</li>
            <li className="text-gray-300">Occupational Therapy</li>
            <li className="text-gray-300">Play Therapy</li>
            <li className="text-gray-300">Art & Music Therapy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-400 text-xl font-semibold mb-4">
            Contact Info
          </h3>
          <div className="space-y-2">
            <a
              href="tel:+917398282238"
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 93057 03345
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <LinkIcon className="w-5 h-5 mr-2" />
              @umeedkiran_
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-row items-center justify-between bg-blue-800 bottom-0 py-5 px-5">   
        <div className="text-center text-gray-400">
          © 2024 Umeed Kiran. All rights reserved.
        </div>
        <div className="text-center text-gray-400">
          Developed by MYTEAMEDIA
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
