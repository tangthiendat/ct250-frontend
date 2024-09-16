import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedInUser } from "./UseLoggedInUser";

const useRedirectIfLoggedIn = () => {
    const { user } = useLoggedInUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);
};

export default useRedirectIfLoggedIn;