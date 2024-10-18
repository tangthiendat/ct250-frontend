import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

import MyAccount from "../features/account-management/MyAccount";
import ResetPasswordForm from "../features/auth/ResetPasswordForm";
import EmailVerification from "../features/auth/components/EmailVerification";
import AvailableFlights from "../features/booking/available-flights/AvailableFlights";
import TransactionHistory from "../features/account-management/TransactionHistory";

import MainLayout from "../layouts/MainLayout";
import BookingLayout from "../layouts/BookingLayout";
import ManageAccountLayout from "../layouts/ManageAccountLayout";
import ShoppingCart from "../features/booking/shopping-cart/ShoppingCart";

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
    path: "/book",
    element: <BookingLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "availability/:flightIndex",
        element: <AvailableFlights />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
