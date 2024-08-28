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
