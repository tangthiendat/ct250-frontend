import React from "react";

interface LanguageProps {
  language: string;
}

const Language: React.FC<LanguageProps> = ({ language }) => {
  return (
    <div className="flex w-full items-center space-x-2 p-2 transition-transform duration-300 ease-in-out hover:scale-105">
      <img
        src={`/header/${language === "Viet Nam" ? "vietnam_flag.png" : "uk_flag.png"}`}
        alt={`${language} flag`}
        className="h-6 w-6 rounded-full shadow-md"
      />
      <span className="text-sm font-semibold text-gray-800 transition-colors duration-200 ease-in-out hover:text-blue-600 md:text-base lg:text-lg">
        {language}
      </span>
    </div>
  );
};

export default Language;
