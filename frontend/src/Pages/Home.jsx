import React, { useEffect } from "react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-yellow-300 flex flex-col font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-500">VibeSpot</h1>
        <img
          onClick={() => navigate("/profile")}
          src="/user.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 p-4 gap-4">
        {/* Left Sidebar - Icons */}
        <nav className="w-20 bg-white rounded-md shadow-md flex flex-col items-center py-6 gap-6">
          <div className="flex flex-col items-center text-yellow-500">
            <HomeIcon className="h-6 w-6 mb-1" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 hover:text-yellow-500">
            <ChatBubbleLeftEllipsisIcon
              onClick={() => navigate("/chat")}
              className="h-6 w-6 mb-1"
            />
            <span className="text-xs">Chat</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 hover:text-yellow-500">
            <MagnifyingGlassIcon className="h-6 w-6 mb-1" />
            <span className="text-xs">Vibe</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 hover:text-yellow-500">
            <UsersIcon className="h-6 w-6 mb-1" />
            <span className="text-xs">Users</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 hover:text-yellow-500">
            <ArrowRightOnRectangleIcon
              onClick={() => handleLogout()}
              className="h-6 w-6 mb-1"
            />
            <span className="text-xs">Logout</span>
          </div>
        </nav>

        {/* Main Feed */}
        <main className="flex-1">
          {/* <div className="bg-white p-4 rounded-md shadow-md"> */}
          <div className="flex items-center mb-3">
            <img
              src="/user.png"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="font-semibold">{username}</h2>
          </div>
          <img
            src="/dosa.png"
            alt="Post"
            className="rounded-md w-1/6 h-64 object-cover"
          />
          <p className="mt-2">Exploring the best dosa shop in Chennai! 😋</p>
          {/* </div> */}
        </main>

        {/* Right Sidebar - Top Spots & Tags */}
        <aside className="w-80 hidden md:block space-y-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="font-semibold text-lg mb-2">Top Spots</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>🍛 Saravana Bhavan - 4.9⭐</li>
              <li>🎥 Luxe Cinemas - 4.8⭐</li>
              <li>🛍️ Express Avenue - 4.7⭐</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="font-semibold text-lg mb-2">Trending Tags</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                #ChennaiEats
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                #Top5
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                #VibeSpot
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default HomePage;
