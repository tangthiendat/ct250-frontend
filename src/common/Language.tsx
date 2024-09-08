interface LanguageProps {
  language: string;
}

const Language: React.FC<LanguageProps> = ({ language }) => {
  return (
    <div className="flex w-full items-center space-x-1">
      <img
        src={`/${language === "Viet Nam" ? "vietnam_flag.png" : "uk_flag.png"}`}
        alt="Language"
        className="h-5"
      />
      <span className="text-sm text-gray-700 hover:text-blue-500 md:text-base lg:text-lg">
        {language}
      </span>
    </div>
  );
};

export default Language;
