import { notification, Spin } from "antd";
import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authService } from "../../../services/auth-service";

const EmailVerification: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const hasVerified = useRef(false);

  useEffect(() => {
    const verifyEmail = async () => {
      if (token && !hasVerified.current) {
        hasVerified.current = true;
        try {
          await authService.verifyEmail(token);
          notification.success({
            pauseOnHover: true,
            message: "Xác thực email thành công",
            description: "Email của bạn đã được xác thực. Vui lòng đăng nhập.",
          });
          navigate("/login");
        } catch (error: any) {
          notification.error({
            message: "Xác thực email thất bại",
            description: "Có lỗi xảy ra trong quá trình xác thực email.",
          });
        }
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <>
      <Spin
        tip="Đang xác thực mail..."
        size="large"
        delay={5 * 1000}
        fullscreen
      />
    </>
  );
};

export default EmailVerification;
