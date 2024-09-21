import { Link, Outlet } from "react-router-dom";
import LanguageMenu from "../common/Header/LanguageMenu";
import { Divider } from "antd";
import Footer from "../common/Footer";

const BookingLayout: React.FC = () => {
  return (
    <div>
      <div className="mx-auto flex items-center space-x-4 lg:max-w-screen-xl">
        <Link to="/">
          <img src="/logo512.png" alt="logo" className="h-12" />
        </Link>

        <Divider type="vertical" className="h-8 bg-black" />

        <LanguageMenu />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default BookingLayout;
