import React, { useState } from "react";
import { notification } from "antd";
import { useRegisterForm } from "../hooks/UseRegisterForm";
import GoogleLoginButton from "./GoogleLoginButton";

const GoogleLoginHandler: React.FC = () => {
  const { form } = useRegisterForm();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const handleGoogleLoginSuccess = async (tokenResponse: any) => {
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      },
    );
    const profile = await userInfoResponse.json();

    localStorage.removeItem("avatarUrl");

    form.setFieldsValue({
      email: profile.email,
      firstName: profile.family_name,
      lastName: profile.given_name,
      avatar: profile.picture,
    });
    localStorage.setItem("avatarUrl", profile.picture);
    setAvatarUrl(profile.picture);
    console.log("Google login profile:", profile);
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error("Google login error:", error);
    notification.error({
      message: "Đăng nhập Google thất bại",
      description: "Có lỗi xảy ra trong quá trình đăng nhập Google",
    });
  };

  return (
    <GoogleLoginButton
      onSuccess={handleGoogleLoginSuccess}
      onError={handleGoogleLoginFailure}
    />
  );
};

export default GoogleLoginHandler;
