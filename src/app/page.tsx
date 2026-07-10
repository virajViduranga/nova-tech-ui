import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Settings, Layers, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900 font-sans">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Compass className="w-6 h-6 text-slate-800" />
          <span className="text-xl font-semibold tracking-wide">nova tech</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#features" className="hover:text-black transition-colors">
            Features
          </Link>
          <Link href="#products" className="hover:text-black transition-colors">
            Products
          </Link>
          <Link href="#about" className="hover:text-black transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 text-sm font-medium text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
          >
            Create Account
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-slate-800 tracking-wide">
            ✦ Premium Tools
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight text-gray-900">
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
              className="flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-all shadow-sm"
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

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-center justify-center min-h-[400px]">
            <p className="text-gray-400 text-sm">
              [ Place your beautiful hardware image here ]
            </p>
            {/* You can replace the <p> tag above with an <img src="/your-image.png" /> tag */}
          </div>
        </div>
      </main>

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
    </div>
  );
}
