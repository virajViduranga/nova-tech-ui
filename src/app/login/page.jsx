"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* 
        The perspective class gives the 3D depth effect. 
        Adjusting the pixel value changes how dramatic the 3D effect looks.
      */}
      <div className="relative w-full max-w-md [perspective:1500px]">
        {/* The inner container handles the actual rotation */}
        <div
          className={`relative h-[600px] w-full transition-all duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* ======================= */}
          {/* FRONT CARD: LOGIN PAGE */}
          {/* ======================= */}
          <div className="absolute inset-0 flex h-full w-full flex-col rounded-2xl bg-white p-8 shadow-xl [backface-visibility:hidden]">
            <div className="flex-grow">
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Welcome back</h2>
              <p className="mb-8 text-sm text-gray-500">Please enter your details to sign in.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center justify-end">
                  <a href="#" className="text-sm font-medium text-stormy-teal hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yale-blue py-2.5 font-medium text-white transition-colors hover:bg-blue-700 cursor-pointer"
                >
                  Sign in
                </button>
              </form>

              <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-2.5 font-medium text-teal-700 transition-colors hover:bg-gray-50 cursor-pointer">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => setIsFlipped(true)}
                className="font-semibold text-teal-900 hover:underline cursor-pointer"
              >
                Sign up
              </button>
            </p>
          </div>

          {/* ======================= */}
          {/* BACK CARD: SIGN UP PAGE */}
          {/* ======================= */}
          <div className="absolute inset-0 flex h-full w-full flex-col rounded-2xl bg-white p-8 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex-grow">
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Create an account</h2>
              <p className="mb-8 text-sm text-gray-500">Join us today! Please fill in your details.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Create Account
                </button>
              </form>
            </div>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setIsFlipped(false)}
                className="font-semibold text-blue-600 hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}