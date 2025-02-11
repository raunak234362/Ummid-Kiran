/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <nav className=" text-gray-700 p-4 sticky top-0 bg-white shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Umeed Kiran
      </Link>
      <nav>
        <ul className="flex space-x-4">
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
        </ul>
      </nav>
    </div>
  </nav>
  )
}

export default Navbar
