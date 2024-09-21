import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Headers from "../common/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Headers />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
