import { Form, notification, Spin } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "./hooks/UseAuth";
import { useLoggedInUser } from "./hooks/UseLoggedInUser";
import useRedirectIfLoggedIn from "./hooks/UseRedirectIfLoggedIn";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import { IAuthRequest } from "../../interfaces";

const LoginForm: React.FC = () => {
  useRedirectIfLoggedIn();

  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );
  const [loading, setLoading] = useState(false);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const [loginForm] = Form.useForm<IAuthRequest>();
  const [notificationApi, contextHolder] = notification.useNotification();
  const loginMutation = useLogin();
  const { refetch } = useLoggedInUser();

  const onFinish = (data: IAuthRequest): void => {
    setLoading(true);
    loginMutation.mutate(data, {
      onSuccess: async () => {
        await refetch();
        notificationApi.success({
          message: "Đăng nhập thành công",
        });
        setLoading(false);
      },
      onError: () => {
        notificationApi.error({
          message: "Đăng nhập thất bại",
        });
        setLoading(false);
      },
    });
  };

  return (
    <>
      {contextHolder}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <Spin size="large" />
        </div>
      )}
      <Form
        className="flex flex-col"
        onFinish={onFinish}
        form={loginForm}
        layout="vertical"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
      >
        <EmailInput />
        <PasswordInput />
        <SubmitButton loading={loading} />
        <div className="mt-4 flex flex-col gap-5 text-center text-xs">
          <a
            href="#"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Quên mật khẩu?
          </a>
          <span className="text-sm text-gray-900">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              Đăng ký ngay
            </Link>
          </span>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
