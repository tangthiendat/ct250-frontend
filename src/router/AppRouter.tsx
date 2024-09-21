import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import MyAccount from "../features/account-management/MyAccount";
import TransactionHistory from "../features/account-management/TransactionHistory";
import ManageAccountLayout from "../layouts/ManageAccountLayout";

import EmailVerification from "../features/auth/components/EmailVerification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "manage-account/",
        element: <ManageAccountLayout />,
        children: [
          {
            path: "my-account",
            element: <MyAccount />,
          },
          {
            path: "transaction-history",
            element: <TransactionHistory />,
          },
        ],
      },
      {
        path: "verify",
        element: <EmailVerification />,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
