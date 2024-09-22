import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmailVerification from "../features/auth/components/EmailVerification";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPasswordForm from "../features/auth/ResetPasswordForm";
import MyAccount from "../features/account-management/MyAccount";
import TransactionHistory from "../features/account-management/TransactionHistory";
import ManageAccountLayout from "../layouts/ManageAccountLayout";
import EmailVerification from "../features/auth/components/EmailVerification";
import BookingLayout from "../layouts/BookingLayout";
import AvailableFlights from "../features/booking/components/AvailableFlights";

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
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordForm />,
      },
    ],
  },
  {
    path: "/book/",
    element: <BookingLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "available-flights",
        element: <AvailableFlights />,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
