import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCommentDots,
  FaInfoCircle,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleAboutClick = () => navigate("/about-us");
  const handleTranslateClick = () => navigate("/translate");
  const handleFaqClick = () => navigate("/faq");
  const handleChatClick = () => navigate("/chat");
  const handleLogout = () => navigate("/");

  return (
    <div className="min-h-screen bg-[hsl(240,10%,3.9%)] text-white p-6 flex flex-col items-center justify-center">
     
     <div className="w-full absolute top-4 flex justify-between items-center px-4">
  {userEmail && (
    <div className="flex items-center gap-2">
      <span className="text-blue-300 text-sm md:text-base font-medium px-3 py-1">
        <span className="text-2xl">Welcome, </span> <span className="text-white">{userEmail}</span>
      </span>
    </div>
  )}
  
  <button
    onClick={handleLogout}
    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-700/60 hover:border-red-400/30 hover:text-red-400"
  >
    <FaSignOutAlt className="text-lg" />
    <span className="hidden sm:inline">Logout</span>
  </button>
</div>

      {/* Header with animations */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-blue-400 animate-fade-in">
          Fruit.AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 animate-fade-in delay-100">
          Pick Your Best
        </p>
      </div>

      {/* Buttons Grid - 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 w-full max-w-2xl">
        {/* Chat Button */}
        <button
          onClick={handleChatClick}
          className="flex flex-col items-center justify-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl transition-all duration-300 hover:bg-gray-700/60 hover:border-blue-400/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in-up delay-100 cursor-pointer"
        >
          <div className="mb-3 p-4 bg-gray-900/30 rounded-full border border-gray-700 transition-all duration-300 group-hover:border-blue-400">
            <FaCommentDots className="text-blue-400 text-3xl transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" />
          </div>
          <span className="text-gray-200 font-medium text-lg transition-all duration-300 group-hover:text-blue-300">
            Chat
          </span>
        </button>

        {/* Translate Button */}
        <button
          onClick={handleTranslateClick}
          className="flex flex-col items-center justify-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl transition-all duration-300 hover:bg-gray-700/60 hover:border-blue-400/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in-up delay-150 cursor-pointer"
        >
          <div className="mb-3 p-4 bg-gray-900/30 rounded-full border border-gray-700 transition-all duration-300 group-hover:border-blue-400">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg"
              alt="Translate"
              className="h-8 w-8 transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-gray-200 font-medium text-lg transition-all duration-300 group-hover:text-blue-300">
            Translate
          </span>
        </button>

        {/* FAQs Button */}
        <button
          onClick={handleFaqClick}
          className="flex flex-col items-center justify-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl transition-all duration-300 hover:bg-gray-700/60 hover:border-blue-400/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in-up delay-200 cursor-pointer"
        >
          <div className="mb-3 p-4 bg-gray-900/30 rounded-full border border-gray-700 transition-all duration-300 group-hover:border-blue-400">
            <FaQuestionCircle className="text-blue-400 text-3xl transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" />
          </div>
          <span className="text-gray-200 font-medium text-lg transition-all duration-300 group-hover:text-blue-300">
            FAQs
          </span>
        </button>

        {/* About Button */}
        <button
          onClick={handleAboutClick}
          className="flex flex-col items-center justify-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl transition-all duration-300 hover:bg-gray-700/60 hover:border-blue-400/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in-up delay-250 cursor-pointer"
        >
          <div className="mb-3 p-4 bg-gray-900/30 rounded-full border border-gray-700 transition-all duration-300 group-hover:border-blue-400">
            <FaInfoCircle className="text-blue-400 text-3xl transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" />
          </div>
          <span className="text-gray-200 font-medium text-lg transition-all duration-300 group-hover:text-blue-300">
            About
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
