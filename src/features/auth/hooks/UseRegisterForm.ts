import { Form } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../interfaces";
import { useRegister } from "./UseAuth";

export const useRegisterForm = () => {
  const [form] = Form.useForm<IUser>();
  const { register, isLoading } = useRegister();

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
      dateOfBirth: new Date(values.dateOfBirth).toISOString(),
      firstName: values.firstName.toUpperCase(),
      lastName: values.lastName.toUpperCase(),
    };

    console.log("Form values before sending to backend:", formattedValues);

    register(formattedValues, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (error) => {
        console.error("Register error:", error);
      },
    });
  };

  return {
    form,
    isLoading,
    onFinish,
  };
};
