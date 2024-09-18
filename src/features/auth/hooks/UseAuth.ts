import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import {
  ApiResponse,
  IAuthRequest,
  IAuthResponse,
  IUser,
} from "../../../interfaces";
import { authService } from "../../../services";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: (authRequest: IAuthRequest) => authService.login(authRequest),
    onSuccess: (data: ApiResponse<IAuthResponse>) => {
      if (data.payload) {
        const { accessToken } = data.payload;
        window.localStorage.setItem("access_token", accessToken);
        navigate("/");
      }
    },
    onError: (error: unknown) => {
      console.error("Login error:", error);
    },
  });
  return { login, isLoading };
};

export const useRegister = () => {
  const navigate = useNavigate();

  const { mutate: register, isPending: isLoading } = useMutation({
    mutationFn: (user: Omit<IUser, "userId">) => authService.register(user),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: unknown) => {
      console.error("Register error:", error);
    },
  });
  return { register, isLoading };
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      window.localStorage.removeItem("access_token");
      queryClient.removeQueries({
        predicate: (query) => {
          return query.queryKey.includes("user");
        },
      });
    },
    onError: (error: unknown) => {
      console.error("Logout error:", error);
    },
  });
  return { logout };
};
