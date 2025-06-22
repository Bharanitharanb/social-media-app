import React, { useState, useEffect } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="flex flex-col items-center min-h-screen bg-yellow-500 relative">
      {/* Home Icon Button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-6 left-6 bg-white p-2 rounded-full shadow hover:bg-yellow-400 transition">
        <HomeIcon className="h-6 w-6 text-yellow-600" />
      </button>

      <h1 className="text-4xl font-bold text-white my-6">VibeSpot</h1>

      <div className="bg-white text-gray-800 w-[90%] max-w-5xl p-8 rounded-3xl shadow-lg">
        {/* Profile Info */}
        <div className="flex flex-col items-center">
          <img
            src="/user.png"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-3xl font-bold text-black">{username}</h2>
          <p className="text-gray-600 text-center mt-1">
            Exploring best vibes in Chennai, Travel Enthusiast
          </p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition">
            Follow
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 my-6">
          <div className="text-center">
            <p className="text-xl font-semibold text-black">307</p>
            <p className="text-gray-600">Following</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-black">125</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-black">45</p>
            <p className="text-gray-600">Posts</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b-2 border-gray-200 mb-4">
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "posts"
                ? "border-b-4 border-yellow-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("posts")}>
            Posts
          </button>
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "tagged"
                ? "border-b-4 border-yellow-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("tagged")}>
            Tagged
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {activeTab === "posts" ? (
            <>
              <div className="bg-gray-100 h-48 rounded-xl"></div>
              <div className="bg-gray-100 h-48 rounded-xl"></div>
              <div className="bg-gray-100 h-48 rounded-xl"></div>
            </>
          ) : (
            <>
              <div className="bg-gray-200 h-48 rounded-xl"></div>
              <div className="bg-gray-200 h-48 rounded-xl"></div>
              <div className="bg-gray-200 h-48 rounded-xl"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
