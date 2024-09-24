import { notification } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import { authService } from "../../../services/auth-service";
import { useMutation } from "@tanstack/react-query";

const EmailVerification: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const hasVerified = useRef(false);
  const { mutate: verifyEmail, isPending: isVerifying } = useMutation({
    mutationFn: authService.verifyEmail,
    onSuccess: () => {
      notification.success({
        pauseOnHover: true,
        message: "Xác thực email thành công",
        description: "Email của bạn đã được xác thực. Vui lòng đăng nhập.",
      });
      navigate("/login");
    },
    onError: (error: any) => {
      notification.error({
        message: "Xác thực email thất bại",
        description: "Có lỗi xảy ra trong quá trình xác thực email.",
      });
    },
  });

  useEffect(() => {
    if (token && !hasVerified.current) {
      hasVerified.current = true;
      verifyEmail(token);
    }
  }, [token, verifyEmail]);

  return (
    <>{isVerifying && <Loading message="Tài khoản đang được kích hoạt..." />}</>
  );
};

export default EmailVerification;
