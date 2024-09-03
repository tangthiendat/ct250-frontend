import React, { useState } from "react";
import NavItems from "./NavItems";
import Menu from "./Menu";
import LanguageMenu from "./LanguageMenu";

const Header: React.FC = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Viet Nam");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const navitems = [
    { id: 0, title: "Khám phá", href: "#" },
    { id: 1, title: "Chuyến bay của tôi", href: "#" },
    { id: 2, title: "Dịch vụ bổ sung", href: "#" },
    { id: 3, title: "Góp ý", href: "#" },
    { id: 4, title: "Hỗ trợ", href: "#" },
  ];

  return (
    <header className="rounded-3xl bg-white shadow-xl">
      <div className="m-3 flex justify-between">
        <a href="../">
          <img
            src="/logo512.png"
            alt="DaViKa Airways"
            className="h-14 md:h-14 lg:h-20 xl:h-24"
          />
        </a>
        <div className="flex items-center space-x-4 text-sm text-gray-700 max-[900px]:hidden">
          <nav className="flex space-x-3">
            {navitems.map((item) => (
              <NavItems key={item.id} href={item.href} el="a">
                {item.title}
              </NavItems>
            ))}
          </nav>

          <div className="h-6 border-l border-gray-300"></div>

          <LanguageMenu
            isLanguageMenuOpen={isLanguageMenuOpen}
            setIsLanguageMenuOpen={setIsLanguageMenuOpen}
            currentLanguage={language}
            setCurrentLanguage={setLanguage}
          />

          <div className="h-6 border-l border-gray-300"></div>

          <NavItems el="button" onClick={() => setIsLoggedin(!isLoggedin)}>
            {isLoggedin ? "Đăng xuất" : "Đăng nhập"}
          </NavItems>
        </div>
        <div className="my-auto flex min-[901px]:hidden">
          <LanguageMenu
            isLanguageMenuOpen={isLanguageMenuOpen}
            setIsLanguageMenuOpen={setIsLanguageMenuOpen}
            currentLanguage={language}
            setCurrentLanguage={setLanguage}
          />

          <div className="mx-4 h-6 border-l border-gray-300"></div>

          <Menu
            navitems={navitems}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isLoggedin={isLoggedin}
            setIsLoggedin={setIsLoggedin}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
