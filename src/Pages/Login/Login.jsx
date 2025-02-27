import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email Address</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-600 text-sm">Remember Me</span>
          </label>
          <a href="#" className="text-blue-500 text-sm hover:underline">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Login
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

