import { useMutation, useQueryClient } from "@tanstack/react-query";


import { useNavigate } from "react-router-dom";
import { ApiResponse, IAuthRequest, IAuthResponse, IUser } from "../../../interfaces";
import { authService } from "../../../services";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (authRequest: IAuthRequest) => authService.login(authRequest),
        onSuccess: (data: ApiResponse<IAuthResponse>) => {
            if (data.payload) {
                queryClient.setQueryData(["user", "logged-in"], { payload: data.payload.user });
                navigate("/");
            }
        },
        onError: (error: unknown) => {
            console.error("Login error:", error);
        },
    });
};

export const useRegister = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (user: Omit<IUser, "userId">) => authService.register(user),
        onSuccess: (data: ApiResponse<IUser>) => {
            queryClient.invalidateQueries(["user", "logged-in"]);
            navigate("/login");
        },
        onError: (error: unknown) => {
            console.error("Register error:", error);
        },
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            queryClient.removeQueries(["user", "logged-in"]);
            navigate("/login");
        },
        onError: (error: unknown) => {
            console.error("Logout error:", error);
        },
    });
};