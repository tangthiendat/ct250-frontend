import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
