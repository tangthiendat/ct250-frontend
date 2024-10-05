import { Button, Form, FormInstance, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoggedInUser } from "../../auth/hooks/UseLoggedInUser";
import { userService } from "../../../services/user-service";
import NewPasswordFields from "./NewPasswordFields"; // Import the new component

interface IResetPasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface ResetPasswordFormProps {
  form: FormInstance<IResetPasswordForm>;
  onCancel: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  form,
  onCancel,
}) => {
  const [currentPassword, setCurrentPassword] = useState<string>("");

  const { user: userInfo } = useLoggedInUser();

  const handleChangePassword = async () => {
    if (!userInfo) {
      toast.error("Người dùng không tồn tại");
      return;
    }

    if (currentPassword === "") {
      toast.error("Vui lòng nhập mật khẩu hiện tại");
      return;
    }

    try {
      await userService.changePassword(userInfo.userId, {
        currentPassword,
        newPassword: form.getFieldValue("newPassword"),
      });

      toast.success("Đổi mật khẩu thành công");
      onCancel();
    } catch {
      toast.error("Đổi mật khẩu thất bại");
    }
  };

  return (
    <>
      <Form layout="vertical" form={form}>
        <Form.Item label="Mật khẩu hiện tại" name="currentPassword">
          <Input.Password
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </Form.Item>
        <NewPasswordFields /> {/* Use the new component */}
        <Form.Item className="flex justify-end">
          <Button className="mr-2" onClick={onCancel}>
            Hủy
          </Button>

          <Button
            type="primary"
            onClick={handleChangePassword}
            htmlType="submit"
          >
            Đổi mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ResetPasswordForm;
