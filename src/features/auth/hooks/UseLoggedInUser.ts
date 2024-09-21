import { useQuery } from "@tanstack/react-query";
import { userService } from "../../../services/user-service";

export function useLoggedInUser() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user", "logged-in"],
    queryFn: userService.getLoggedInUser,
  });

  return { user: data?.payload, isLoading, refetch };
}
