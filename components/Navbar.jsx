"use client";

import { useState } from "react";
import { Compass, ArrowRight, Settings, Layers, Shield, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex bg-gray-300 items-center justify-between px-8 py-6 max-w-full mx-auto shadow-sm relative z-50">
        {/* Logo */}
        <div className="flex items-center bg-white rounded-2xl">
          <img src="nova-tech-logo.png" alt="" className="w-26 h-16 pb-1" />
        </div>

        {/* Desktop Links */}
        <div className="hidden max-w-md md:flex items-center justify-center gap-12 text-sm font-medium text-gray-400 bg-white rounded-4xl py-4 px-6 hover:scale-110 duration-400 transition-all">
          <Link href="#features" className="hover:text-black transition-all">
            Features
          </Link>
          <Link href="#products" className="hover:text-black transition-all">
            Products
          </Link>
          <Link href="#about" className="hover:text-black transition-all">
            About
          </Link>
        </div>
     
        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-white rounded-3xl w-full max-w-md border border-gray-200 pr-4 overflow-hidden hover:scale-110 duration-400 transition-all">
            <input 
                type="text" 
                className="w-full px-6 py-3 bg-transparent outline-none text-gray-700" 
                placeholder="Search..."
            />
            <Search className="bg-black text-white rounded-full w-10 h-10 p-2.5 cursor-pointer hover:scale-110 duration-300 transition-all"/>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-6 bg-white rounded-4xl px-16 py-2 hover:scale-110 duration-400 transition-all">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-400 hover:text-black transition-all"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 text-sm font-medium text-white bg-yale-blue rounded-full hover:bg-slate-700 transition-all"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center p-2 bg-white rounded-xl text-black hover:scale-105 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col w-full bg-gray-300 px-8 pb-6 gap-4 absolute z-40 shadow-md">
          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-4 text-sm font-medium text-gray-400 bg-white rounded-3xl py-4 px-6">
            <Link href="#features" className="hover:text-black transition-all border-b " onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="#products" className="hover:text-black transition-all border-b " onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="#about" className="hover:text-black transition-all border-b " onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </div>

          {/* Mobile Search */}
          <div className="flex items-center bg-white rounded-3xl w-full border border-gray-200 pr-4 overflow-hidden">
            <input 
                type="text" 
                className="w-full px-6 py-3 bg-transparent outline-none text-gray-700" 
                placeholder="Search..."
            />
            <Search className="bg-black text-white rounded-full w-10 h-10 p-2.5 cursor-pointer"/>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col items-center gap-4 bg-white rounded-3xl py-4 px-6">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-400 hover:text-black transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 text-sm font-medium text-white bg-yale-blue rounded-full hover:bg-slate-700 transition-all w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
