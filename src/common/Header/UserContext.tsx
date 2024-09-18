import React, { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../../interfaces";
import { userService } from "../../services/user-service";

interface UserContextProps {
  user: IUser | null;
  avatarUrl: string | null;
  isLoading: boolean;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  avatarUrl: null,
  isLoading: true,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await userService.getLoggedInUser();
        const userData = response.payload;
        if (userData) {
          setUser(userData);
          if (userData.avatar) {
            setAvatarUrl(userData.avatar);
            localStorage.setItem("avatarUrl", userData.avatar);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, avatarUrl, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
