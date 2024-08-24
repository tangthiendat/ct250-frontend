import { useRoutes } from "react-router-dom";
import RegisterLayout from "./layouts/RegisterLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: "/login",
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      ),
    },
    {
      path: "/register",
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      ),
    },
  ]);
  return routeElements;
}
