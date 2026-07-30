import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/Navbar";
import ProductCard from "../../components/Cards";
import Footer from "../../components/Footer";
import { Compass, ArrowRight, Settings, Layers, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#ededed] text-gray-900 font-sans">
      <NavBar/>

      {/* Hero Section */}
      <main className="relative w-full min-h-[80vh] flex flex-col md:justify-center overflow-hidden bg-gray-50">
  {/* 
    1. TEXT CONTAINER 
    This keeps your text aligned with the rest of your max-w-7xl website,
    but we limit it to half the width on desktop (md:w-1/2).
  */}
  <div className="w-full max-w-full mx-auto px-8 pt-20 pb-24 relative z-10">
    <div className="w-full md:w-1/2 space-y-8 pr-0 md:pr-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-slate-800 tracking-wide">
        ✦ Premium Tools
      </div>
      <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight text-yale-blue">
        All your tools.
        <br />
        <span className="text-gray-500">One minimal space.</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-md leading-relaxed">
        Create an account to access your premium gadgets, manage your
        settings, and control your workflow without the clutter.
      </p>

      <div className="flex items-center gap-4 pt-4">
        <Link
          href="/register"
          className="flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-yale-blue rounded-full hover:bg-slate-700 hover:gap-3 transition-all shadow-sm"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="#learn-more"
          className="px-6 py-3.5 text-sm font-medium text-slate-800 bg-white rounded-full border border-gray-200 hover:border-gray-300 transition-all shadow-sm"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>

  {/* 
    2. DESKTOP IMAGE (The Angled Cut)
    This div is absolute, meaning it sticks to the right side of the screen.
    The md:[clip-path:...] class creates that diagonal slant.
  */}
  <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full z-0 md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
    <img
      src="iPh17-pro-max-img.webp"
      alt="Premium tools"
      className="w-full h-full object-contain"
    />
  </div>

  {/* 
    3. MOBILE IMAGE
    On small screens, a side-by-side angle doesn't fit well. 
    This shows the image normally underneath the text for mobile users. 
  */}
  <div className="w-full h-[400px] md:hidden relative z-0">
    <img
      src="tech-items.jpeg"
      alt="Premium tools"
      className="w-full h-full object-cover"
    />
  </div>
</main>



      <section id="cards" className="max-w-full px-6 h-200 bg-gray-200 flex flex-nowrap gap-6 items-center justify-start overflow-x-auto pb-4">

     <div className="shrink-0">
      <ProductCard/>
    </div>
    <div className="shrink-0">
      <ProductCard/>
    </div>
    <div className="shrink-0">
      <ProductCard/>
    </div>
    <div className="shrink-0">
     <ProductCard/>
    </div>
    <div className="shrink-0">
     <ProductCard/>
    </div>
    <div className="shrink-0">
     <ProductCard/>
    </div>


      </section>



      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">
              Why choose Nova Tech?
            </h2>
            <p className="text-gray-500">
              Everything you need, built into one seamless experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                <Settings className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Personalized Settings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customize your workspace and devices to fit exactly how you
                work. No distractions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                <Layers className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Minimal Space</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A clean, uncluttered interface designed to keep your focus on
                what matters most.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                <Shield className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your data and hardware connections are secured with
                industry-leading encryption.
              </p>
            </div>
          </div>
        </div>
      </section>
       <Footer />
    </div>
   
  );
}
