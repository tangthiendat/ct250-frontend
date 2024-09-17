import { useEffect } from "react";
import { Form, notification } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useRegister } from "./UseAuth";

export const useRegisterForm = () => {
    const [form] = Form.useForm();
    const { register, isLoading } = useRegister();
    const [notificationApi, contextHolder] = notification.useNotification();
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
    };

    return {
        form,
        isLoading,
        contextHolder,
        onFinish,
    };
};