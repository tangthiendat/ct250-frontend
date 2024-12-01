// interface BodyLayoutProps {}

const BodyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto mt-5 max-w-screen-md px-2 transition-all duration-1000 md:mt-10 xl:max-w-screen-lg">
      {children}
    </div>
  );
};

export default BodyLayout;
