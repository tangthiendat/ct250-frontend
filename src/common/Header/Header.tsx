import React, { useState } from "react";

const Header: React.FC = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <img src="logo.png" alt="Bamboo Airways" className="h-10" />
          <span className="text-lg font-bold text-blue-900">
            BAMBOO AIRWAYS
          </span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <div className="relative">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <img src="vietnam-flag.png" className="h-4" />
              <span>Vietnam</span>
              <span className="text-gray-400">|</span>
              <span>English</span>
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Vietnam
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  English
                </button>
              </div>
            )}
          </div>
          <div className="border-l border-gray-300 h-6"></div>
          <a href="#" className="text-blue-900">
            Login
          </a>
          <div className="border-l border-gray-300 h-6"></div>
          <a
            href="#"
            className="flex items-center space-x-1 text-green-700 font-semibold"
          >
            <span>Sign In</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
