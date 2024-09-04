import { Dispatch, SetStateAction } from "react";

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

export default Language;
