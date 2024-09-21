import { Form, notification } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../interfaces";
import { useRegister } from "./UseAuth";
import { formatISODate } from "../../../utils";

export const useRegisterForm = () => {
  const [form] = Form.useForm<IUser>();
  const { register, isLoading } = useRegister();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const onFinish = (values: IUser) => {
    const formattedValues = {
      ...values,
      dateOfBirth: formatISODate(values.dateOfBirth.toString()),
      firstName: values.firstName.toUpperCase(),
      lastName: values.lastName.toUpperCase(),
    };

    console.log("Form values before sending to backend:", formattedValues);

    register(formattedValues, {
      onSuccess: () => {
        form.resetFields();
        setIsModalVisible(true);
      },
      onError: (error: any) => {
        console.error("Register error:", error);
        notification.error({
          message: "Đăng ký thất bại",
          description:
            error.message || "Có lỗi xảy ra trong quá trình đăng ký.",
        });
      },
    });
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    navigate("/login");
  };

  return {
    form,
    isLoading,
    onFinish,
    isModalVisible,
    handleModalOk,
  };
};
