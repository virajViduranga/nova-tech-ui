import React from 'react';

export default function LoginPage() {
  return (
    // Outer background matching the soft gray from the image
    <div className="min-h-screen bg-[#E5E5E5] flex items-center justify-center p-4 sm:p-6">
      
      {/* Main container with large border radius, similar to the main app window in the image */}
      <div className="bg-[#F2F2F0] w-full max-w-5xl min-h-[700px] rounded-[2.5rem] p-4 sm:p-6 shadow-xl flex flex-col md:flex-row gap-6 relative overflow-hidden">

        {/* Left Column: Visual/Branding Side (Inspired by the furniture cards) */}
        <div className="hidden md:flex flex-1 bg-white rounded-[2rem] p-8 flex-col justify-between relative overflow-hidden shadow-sm">
            <div>
              {/* Logo Area */}
              <div className="flex items-center gap-3 mb-12">
                <img src="/nova-tech-logo.png" alt="" className='w-35 h-20'/>
              </div>
              
              {/* Marketing Text */}
              <h1 className="text-5xl font-light tracking-tight text-gray-800 leading-tight">
                Welcome to<br/><span className="font-medium">Nova Tach</span>
              </h1>
              <p className="text-gray-500 mt-5 text-sm max-w-xs leading-relaxed">
                Create an account to access your tools, and personalized settings in one minimal space.
              </p>
            </div>

            {/* Decorative element mimicking the product cards */}
            <div className="bg-[#F8F8F8] h-56 rounded-3xl mt-8 relative flex items-center justify-center border border-gray-100">
               <img src="/tech-items.jpeg" alt="" className='object-cover' />
                
                {/* Floating pill badge like the ratings in the image */}
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-semibold flex items-center gap-1">
                    <span className="text-black">✦ Premium</span>
                </div>
            </div>
        </div>

        {/* Right Column: The Login Form */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Create an account</h2>
            <p className="text-sm text-gray-500 mb-8">Enter your details to continue.</p>

            <form className="space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2 ml-2">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-white border-none rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-sm placeholder:text-gray-400"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2 ml-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white border-none rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-sm placeholder:text-gray-400"
                />
              </div>

              {/* Options */}
              <div className="flex items-center justify-between px-2 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded text-black focus:ring-black accent-black" />
                  <span className="text-xs text-gray-600 font-medium">Remember me</span>
                </label>
                <a href="#" className="text-xs text-gray-500 hover:text-black font-medium transition-colors">Forgot Password?</a>
              </div>

              {/* Submit Button (Pill shape with icon, matching the image) */}
              <button
                type="button"
                className="w-full bg-yale-blue text-white rounded-full py-4 text-sm font-medium hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 mt-4 group cursor-pointer"
              >
                Sign In
                <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-xs text-gray-500">
                Already have an account? <a href="/login" className="text-black font-semibold hover:underline underline-offset-4">Log in</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}