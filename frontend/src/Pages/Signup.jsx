import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };

    try {
      // Send POST request to backend API
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        userData
      );
      console.log(response.data.message);
      alert("User Registered Successfully!");
    } catch (error) {
      console.error(
        "Error signing up:",
        error.response?.data?.message || error.message
      );
      alert("Signup failed! Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-yellow-500 px-4">
      <h1 className="text-4xl font-bold mb-6 text-white">VibeSpot</h1>

      <div className="bg-white text-gray-800 w-[375px] h-[500px] rounded-[2rem] shadow-20xl border-[14px] border-yellow-400 focus:outline-none focus:ring relative overflow-hidden">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gray-300 rounded-full"></div>

        <div className="p-6 pt-4 h-full flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Create Account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 pr-12"
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-yellow-500"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-700 transition">
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-yellow-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
