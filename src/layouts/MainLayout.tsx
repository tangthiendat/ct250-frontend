import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useLoggedInUser } from "../features/auth/hooks/UseLoggedInUser";
import Loading from "../common/Loading";

const MainLayout: React.FC = () => {
  const { user, isLoading } = useLoggedInUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
