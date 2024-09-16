import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RoleBasedRoute from "./RoleBasedRoute";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem("access_token");

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return <>{accessToken && <RoleBasedRoute>{children}</RoleBasedRoute>}</>;
};

export default ProtectedRoute;
