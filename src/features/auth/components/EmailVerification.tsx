import { notification } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import { authService } from "../../../services/auth-service";

const EmailVerification: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const hasVerified = useRef(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      if (token && !hasVerified.current) {
        hasVerified.current = true;
        try {
          await authService.verifyEmail(token);
          setTimeout(() => {
            notification.success({
              pauseOnHover: true,
              message: "Xác thực email thành công",
              description:
                "Email của bạn đã được xác thực. Vui lòng đăng nhập.",
            });
            setLoading(false);
            navigate("/login");
          }, 3000);
        } catch (error: any) {
          notification.error({
            message: "Xác thực email thất bại",
            description: "Có lỗi xảy ra trong quá trình xác thực email.",
          });
          setLoading(false);
        }
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <>{loading && <Loading message="Tài khoản đang được kích hoạt..." />}</>
  );
};

export default EmailVerification;
