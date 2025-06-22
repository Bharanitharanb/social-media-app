import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";

const Chat = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="flex h-screen bg-yellow-500 text-black">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 relative">
        {/* Home Button */}
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 left-4 flex items-center gap-1 text-yellow-500 hover:text-yellow-600">
          <HomeIcon className="w-6 h-6" />
          <span className="text-sm font-semibold">Home</span>
        </button>

        <h2 className="text-xl font-bold mt-14 mb-4">Chats</h2>

        <div className="space-y-4">
          <div className="p-2 rounded-lg hover:bg-yellow-100 cursor-pointer">
            <h3 className="font-semibold">Arjun_TravelVibes</h3>
            <p className="text-sm text-gray-500">Hey! Loved your post 😄</p>
          </div>
          <div className="p-2 rounded-lg hover:bg-yellow-100 cursor-pointer">
            <h3 className="font-semibold">Chennai_Eats</h3>
            <p className="text-sm text-gray-500">Check out this spot!</p>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 bg-white flex flex-col">
        <div className="p-4 border-b bg-yellow-100 font-bold text-xl">
          Arjun_TravelVibes
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          <div className="self-start bg-gray-200 p-3 rounded-xl max-w-xs">
            Hey, did you try the new dosa place? 😋
          </div>
          <div className="self-end bg-yellow-300 p-3 rounded-xl max-w-xs">
            Yes! It was amazing 🤤
          </div>
        </div>

        {/* Input box */}
        <div className="p-4 border-t flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
