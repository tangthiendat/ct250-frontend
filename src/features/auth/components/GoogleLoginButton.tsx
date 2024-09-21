import React from "react";
import { Button } from "antd";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";

interface GoogleLoginButtonProps {
  onSuccess: (tokenResponse: any) => void;
  onError: (error: any) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  onSuccess,
  onError,
}) => {
  const googleLogin = useGoogleLogin({
    onSuccess,
    onError,
  });

  return (
    <Button
      type="default"
      size="large"
      icon={<FcGoogle />}
      className="w-full"
      onClick={() => googleLogin()}
    >
      Đăng ký với Google
    </Button>
  );
};

export default GoogleLoginButton;
