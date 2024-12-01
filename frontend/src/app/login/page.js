"use client";

import { useState } from "react";
import axios from "../../utils/api";
import Image from "next/image";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://feynai.onrender.com/auth/login", formData);
      localStorage.setItem("access_token", response.data.access_token); // Save JWT in localStorage
      console.log(localStorage.getItem("access_token"))
      alert("Login successful!");
      window.location.href = "/start"; // Redirect to start screen
    } catch (error) {
      alert("Error logging in: " + (error.response?.data?.detail || "Unknown error"));
    }
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #E3F2FF 100%)",
      }}
    >
      <div className="flex items-center mb-6">
        <Image src="/images/logo.png" alt="FeynAI Logo" className="w-16 h-16 mr-2" />
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "36px",
            color: "#1E293B",
          }}
        >
          FeynAI
        </h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        {/* Email Input */}
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-4"
          onChange={handleInputChange}
        />

        {/* Password Input */}
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-4"
          onChange={handleInputChange}
        />

        {/* Continue Button */}
        <button
          className="w-full py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
          }}
          onClick={handleLogin}
        >
          Continue
        </button>

        {/* Signup Link */}
        <p
          className="text-center text-sm text-gray-700 mt-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
