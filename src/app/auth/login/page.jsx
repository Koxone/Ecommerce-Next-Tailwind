'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const handleClick = (action) => {
    if (action === 'signup') {
      router.push('/auth/sign-up');
    }
    if (action === 'forgot') {
      router.push('/auth/forgot-password');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 px-4 pb-12 md:-mt-10">
      <div className="animate-fade-in w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-montserrat text-3xl font-bold text-white">
            Welcome Back
          </h2>
          <p className="font-inter mt-2 text-gray-400">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="font-inter mb-2 block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="font-inter w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-white focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="font-inter mb-2 block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="font-inter w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 pr-12 text-white placeholder-gray-400 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="focus-ring absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  👁️
                </button>
              </div>
            </div>
            <button
              onClick={() => handleClick('forgot')}
              type="button"
              className="cursor-pointer text-blue-500 hover:text-blue-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => handleClick('signin')}
            type="submit"
            className="font-poppins w-full cursor-pointer rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
          >
            Sign In
          </button>
        </form>

        {/* Back to Home */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-center">
            <p className="font-inter text-gray-400">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => handleClick('signup')}
                className="cursor-pointer font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
              >
                Sign up
              </button>
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push('/')}
            className="font-inter cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-400"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
