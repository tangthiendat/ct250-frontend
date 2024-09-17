import { useEffect, useState } from "react";
import { IUser } from "../../../interfaces";
import { userService } from "../../../services/user-service";


export function useAvatarUrl(user?: IUser) {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await userService.getLoggedInUser();
                const userData = response.payload;
                if (userData && userData.avatar) {
                    setAvatarUrl(userData.avatar);
                    localStorage.setItem("avatarUrl", userData.avatar);
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        if (user) {
            fetchUserData();
        } else {
            const storedAvatarUrl = localStorage.getItem("avatarUrl");
            if (storedAvatarUrl) {
                setAvatarUrl(storedAvatarUrl);
            }
        }
    }, [user]);

    return avatarUrl;
}