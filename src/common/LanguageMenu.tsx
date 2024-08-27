import MenuDrop from "./MenuDrop";
import { Dispatch, SetStateAction } from "react";

interface LanguageMenuProps {
  isLanguageMenuOpen: boolean;
  setIsLanguageMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({
  isLanguageMenuOpen,
  setIsLanguageMenuOpen,
  currentLanguage: currentLanguage,
  setCurrentLanguage: setCurrentLanguage,
}) => {
  // const handleLanguageChange = (language: string) => {
  //   setLanguage(language);
  //   setIsLanguageMenuOpen(false);
  // };

  return (
    <div className="relative flex">
      <button
        onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
        className="focus:outline-none"
      >
        <Language
          language={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
      </button>

      <MenuDrop
        el="language"
        isLanguageMenuOpen={isLanguageMenuOpen}
        setIsLanguageMenuOpen={setIsLanguageMenuOpen}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />

      {/* {isLanguageMenuOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded border border-gray-200 bg-white shadow-lg">
          <div className="flex items-center pl-1">
            <img src="/vietnam_flag.png" alt="Vietnam" className="h-4" />
            <NavItems
              el="button"
              className="block w-full py-2 pl-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => handleLanguageChange("Vie")}
            >
              Viet Nam
            </NavItems>
          </div>

          <div className="flex items-center pl-1">
            <img src="/uk_flag.png" alt="English" className="h-4" />
            <NavItems
              el="button"
              className="block w-full py-2 pl-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => handleLanguageChange("Eng")}
            >
              English
            </NavItems>
          </div>
        </div>
      )} */}
    </div>
  );
};

interface LanguageProps {
  language: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
}

const Language: React.FC<LanguageProps> = ({
  language,
  setCurrentLanguage,
}) => {
  return (
    <div
      className="flex w-full items-center space-x-1"
      onClick={() => setCurrentLanguage(language)}
    >
      <img
        src={`/${language === "Viet Nam" ? "vietnam_flag.png" : "uk_flag.png"}`}
        alt="Language"
        className="h-5"
      />
      <span className="text text-gray-700 hover:text-blue-500">{language}</span>
    </div>
  );
};

export { Language, LanguageMenu };

export default LanguageMenu;
