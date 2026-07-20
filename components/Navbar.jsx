import { Compass, ArrowRight, Settings, Layers, Shield, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-6 max-w-full mx-auto shadow-sm">
        <div className="flex items-center bg-white rounded-2xl">
          <img src="nova-tech-logo.png" alt="" className="w-26 h-16 pb-1" />
        </div>

        <div className="hidden w-full max-w-md md:flex items-center justify-center gap-12 text-sm font-medium text-gray-600 bg-white rounded-4xl  py-4 hover:scale-110 duration-400 transition-all">
          <Link href="#features" className="hover:font-bold  transition-all">
            Features
          </Link>
          <Link href="#products" className="hover:font-bold  transition-all">
            Products
          </Link>
          <Link href="#about" className="hover:font-bold  transition-all">
            About
          </Link>
        </div>
     
<div className="flex items-center bg-white rounded-3xl w-full max-w-md border border-gray-200 pr-4 overflow-hidden hover:scale-110 duration-400 transition-all">
    
    <input 
        type="text" 
        className="w-full px-6 py-3 bg-transparent outline-none text-gray-700" 
        placeholder="Search..."
    />
        <Search className="bg-black text-white rounded-full w-10 h-10 p-2.5 cursor-pointer hover:scale-110 duration-300 transition-all"/>
</div>
        <div className="flex items-center gap-6 bg-white rounded-4xl px-16 py-2 hover:scale-110 duration-400 transition-all">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:font-bold  transition-all"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 text-sm font-medium text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-all"
          >
            Create Account
          </Link>
        </div>
      </nav>
    </>
  );
}
