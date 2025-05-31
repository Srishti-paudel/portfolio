"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
         <header className="fixed top-0 w-full bg-white shadow z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-purple-700">Srishti Paudel</h1>
          <ul className="flex gap-6 text-sm md:text-base font-medium text-gray-700">
            <li><a href="/" className="hover:text-purple-600 transition">Home</a></li>
            <li><a href="about" className="hover:text-purple-600 transition">About</a></li>
            <li><a href="projects" className="hover:text-purple-600 transition">Projects</a></li>
            <li><a href="contactme" className="hover:text-purple-600 transition">Contact</a></li>
            <li><a href="hireme" className="hover:text-purple-600 transition">Hireme</a></li>
          </ul>
        </nav>
      </header>
   
  );
};

export default Navbar;

