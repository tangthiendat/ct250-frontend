import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyAccount from "../features/account-management/MyAccount";
import PersonalInfo from "../features/account-management/PersonalInfo";
import TransactionHistory from "../features/account-management/TransactionHistory";
import MainLayout from "../layouts/MainLayout";
import ManageAccountLayout from "../layouts/ManageAccountLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <ManageAccountLayout />,
        children: [
          {
            path: "/manage-account/my-account",
            element: <MyAccount />,
          },
          {
            path: "/manage-account/personal-info",
            element: <PersonalInfo />,
          },
          {
            path: "/manage-account/transaction-history",
            element: <TransactionHistory />,
          },
        ],
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
