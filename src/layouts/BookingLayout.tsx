import { Link, Outlet } from "react-router-dom";
import LanguageMenu from "../common/Header/LanguageMenu";
import { Divider } from "antd";
import Footer from "../common/Footer";

const BookingLayout: React.FC = () => {
  return (
    <div>
      {/* header */}
      <div className="z-50 mx-auto flex items-center space-x-2 bg-white md:space-x-4 lg:max-w-screen-xl">
        <Link to="/">
          <img
            src="/logo512.png"
            alt="logo"
            className="h-12 p-2 pr-0 transition-all duration-1000 md:h-10 md:p-0"
          />
        </Link>

        <Divider type="vertical" className="h-5 bg-black" />

        <Link to="/" className="text-sm font-semibold hover:text-blue-500">
          Trang chủ
        </Link>

        <Divider type="vertical" className="h-5 bg-black" />

        <div className="text-sm">
          <LanguageMenu />
        </div>
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default BookingLayout;
