"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-gray-700 p-4 sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Umeed Kiran
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="lg:hidden block text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when menu is closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen
              ? "block transition-all duration-500 transform translate-x-0"
              : "hidden transform translate-x-full"
          } sm:hidden w-full mt-4 flex flex-col space-y-2`}
        >
          <li>
            <Link
              href="/"
              className="block py-2 hover:underline"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block py-2 hover:underline"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 hover:underline"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="block py-2 hover:underline"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
          </li>
        </ul>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:underline">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
