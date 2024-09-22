// import { Button, Form, Input } from "antd";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { authService } from "../../services";

// const ForgotPasswordForm: React.FC = () => {
//   const [form] = Form.useForm();
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async (values: { email: string }) => {
//     setIsLoading(true);
//     try {
//       await authService.forgotPassword(values.email, window.location.origin);
//       toast.success("Yêu cầu đặt lại mật khẩu đã được gửi");
//       // navigate("/login");
//     } catch (error: any) {
//       toast.error("Có lỗi xảy ra, vui lòng thử lại");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
//         <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
//           Quên mật khẩu?
//         </h2>
//         <p className="mb-6 text-center text-gray-600">
//           Vui lòng nhập email đã đăng ký tài khoản DaViKa Airways.
//         </p>
//         <Form form={form} onFinish={onFinish} layout="vertical">
//           <Form.Item
//             label="Email đã đăng ký"
//             name="email"
//             hasFeedback
//             rules={[
//               {
//                 required: true,
//                 message: "Vui lòng nhập email",
//               },
//               {
//                 pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                 message: "Email không hợp lệ",
//               },
//             ]}
//           >
//             <Input placeholder="Email" />
//           </Form.Item>
//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               loading={isLoading}
//               className="w-full"
//             >
//               Gửi
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordForm;
import { Button, Form, Input, Result } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services";

const ForgotPasswordForm: React.FC = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onFinish = async (values: { email: string }) => {
    setIsLoading(true);
    try {
      await authService.forgotPassword(values.email, window.location.origin);
      setResult("success");
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại",
      );
      setResult("error");
    } finally {
      setIsLoading(false);
    }
  };

  if (result === "success") {
    return (
      <Result
        status="success"
        title="Yêu cầu đặt lại mật khẩu đã được gửi"
        subTitle="Vui lòng kiểm tra email của bạn để tiếp tục quá trình đặt lại mật khẩu."
        extra={[
          <Button type="primary" key="login" onClick={() => navigate("/login")}>
            Quay về trang đăng nhập
          </Button>,
        ]}
      />
    );
  }

  if (result === "error") {
    return (
      <Result
        status="error"
        title="Có lỗi xảy ra"
        subTitle={errorMessage || "Vui lòng thử lại sau."}
        extra={[
          <Button type="primary" key="retry" onClick={() => setResult(null)}>
            Thử lại
          </Button>,
        ]}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
          Quên mật khẩu?
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Vui lòng nhập email đã đăng ký tài khoản DaViKa Airways.
        </p>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Email đã đăng ký"
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email",
              },
              {
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email không hợp lệ",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full"
            >
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
