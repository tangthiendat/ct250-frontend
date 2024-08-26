import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavMenuItems from "./NavMenuItems";

const Header: React.FC = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Vie");
  const [isLoggedin, setIsLoggedin] = useState(false);
  // const

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex  justify-between m-3">
        <img
          src="../../public/logo512.png"
          alt="DaViKa Airways"
          className="h-14 md:h-14 lg:h-20 xl:h-24"
        />
        <div className="flex items-center space-x-4 text-sm text-gray-700  max-[880px]:hidden">
          <nav className="flex space-x-3">
            <NavMenuItems href="#">Khám phá</NavMenuItems>
            <NavMenuItems href="#">Chuyến bay của tôi</NavMenuItems>
            <NavMenuItems href="#">Dịch vụ bổ sung</NavMenuItems>
            <NavMenuItems href="#">Góp ý</NavMenuItems>
            <NavMenuItems href="#">Hỗ trợ</NavMenuItems>
          </nav>
          <div className="border-l border-gray-300 h-6"></div>
          <div className="relative">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <img
                src={`../../public/${language === "Vie" ? "vietnam_flag.png" : "uk_flag.png"}`}
                alt="Language"
                className="h-4"
              />
              <span className="text-xl text-gray-700 hover:text-blue-500">{language}</span>
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleLanguageChange("Vie")}
                >
                  Vietnam
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleLanguageChange("Eng")}
                >
                  English
                </button>
              </div>
            )}
          </div>
          <div className="border-l border-gray-300 h-6"></div>
          <NavMenuItems href="#">{isLoggedin ? "Logout" : "Login"}</NavMenuItems>
        </div>
        <div className="min-[880px]:hidden my-auto">
          <IoMenu className="text-3xl text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Header;
