"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NavItems } from "@/data/Navbar";
import { Menu, X } from "lucide-react"; // Icons for menu toggle
import { usePathname } from "next/navigation"; // Hook to get the current path
import logo from "../assets/img/icon.png"; // Import images

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <nav className="bg-green-400 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <div>
            <Link href="/" className="text-2xl font-bold">
              GS Fitness
            </Link>
            {/* <img src={logo} alt="" /> */}
          </div>
          <span className="">club</span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <div className={`${isOpen ? "block bg-green-800" : "hidden"} absolute top-20 left-0 w-full md:static md:flex md:w-auto md:space-x-6 md:bg-transparent`}>
          {NavItems.map((item) => (
            <Link key={item.id} href={item.url} className={`block px-4 py-2 md:inline-block ${pathname === item.url ? "underline font-bold" : "hover:text-red-800"}`}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
