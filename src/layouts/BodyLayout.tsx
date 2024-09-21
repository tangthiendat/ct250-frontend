// interface BodyLayoutProps {}

const BodyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto mt-5 w-[90%] transition-all duration-1000 md:mt-10 lg:w-[80%]">
      {children}
    </div>
  );
};

export default BodyLayout;
