// import { useQuery } from "@tanstack/react-query";
// import { userService } from "../../../services/user-service";

// export function useLoggedInUser() {
//     const { data, isLoading, refetch } = useQuery({
//         queryKey: ["user", "logged-in"],
//         queryFn: userService.getLoggedInUser,
//     });
//     return { user: data?.payload, isLoading, refetch };
// }

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { userService } from "../../../services/user-service";

export function useLoggedInUser() {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["user", "logged-in"],
        queryFn: userService.getLoggedInUser,
    });
    const [user, setUser] = useState(data?.payload || null);

    useEffect(() => {
        if (data?.payload) {
            setUser(data.payload);
        }
    }, [data]);

    return { user, setUser, isLoading, refetch };
}