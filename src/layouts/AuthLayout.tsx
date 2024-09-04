import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
