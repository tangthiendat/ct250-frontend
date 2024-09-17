import { Button, Divider, Form, notification } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactFields from "./components/ContactFields";
import DateAndGenderFields from "./components/DateAndGenderFields";

import { FcGoogle } from "react-icons/fc";
import IdentityFields from "./components/IndentityFields";
import NameFields from "./components/NameFields";
import PasswordFields from "./components/PasswordFields";
import { useRegister } from "./hooks/UseAuth";

const RegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  const { register, isLoading } = useRegister();
  const [notificationApi, contextHolder] = notification.useNotification();
  const [componentSize, setComponentSize] = useState<"large">("large");
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const onFinish = (values: any) => {
    const formattedValues = {
      ...values,
      dateOfBirth: values.dateOfBirth
        ? moment(values.dateOfBirth).format("DD/MM/YYYY")
        : null,
    };

    register(formattedValues, {
      onSuccess: () => {
        notificationApi.success({
          message: "Đăng ký thành công",
        });
        navigate("/login");
      },
      onError: (error) => {
        console.error("Register error:", error);
        notificationApi.error({
          message: "Đăng ký thất bại",
          description: "Có lỗi xảy ra trong quá trình đăng ký",
        });
      },
    });

    // registerMutation.mutate(formattedValues, {
    //   onSuccess: () => {
    //     notificationApi.success({
    //       message: "Đăng ký thành công",
    //     });
    //     setTimeout(() => {
    //       setLoading(false);
    //       navigate("/login");
    //     }, 2000);
    //   },
    //   onError: (error) => {
    //     notificationApi.error({
    //       message: "Đăng ký thất bại",
    //       description: error.message || "Có lỗi xảy ra trong quá trình đăng ký",
    //     });
    //     setLoading(false);
    //   },
    // });
  };

  return (
    <>
      {/* {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <Spin size="large" />
        </div>
      )} */}
      {contextHolder}
      <Form
        className="flex flex-col"
        onFinish={onFinish}
        layout="vertical"
        size={componentSize}
        form={form}
      >
        <NameFields />
        <DateAndGenderFields />
        <ContactFields />
        <IdentityFields />
        <PasswordFields />

        <Button
          type="primary"
          size="large"
          htmlType="submit"
          loading={isLoading}
        >
          Đăng ký
        </Button>

        <Divider plain>Hoặc</Divider>

        <Button type="default" size="large" icon={<FcGoogle />}>
          Đăng ký với Google
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
