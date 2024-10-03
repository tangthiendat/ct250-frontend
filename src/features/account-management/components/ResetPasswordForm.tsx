import { Button, Form, FormInstance, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoggedInUser } from "../../auth/hooks/UseLoggedInUser";

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
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const { user: userInfo } = useLoggedInUser();

  const handleChangePassword = () => {
    if (currentPassword !== "") {
      toast.error("Mật khẩu hiện tại không đúng");
      return;
    } else {
      //logic to change password
      console.log(userInfo?.userId);

      toast.success("Đổi mật khẩu thành công");
      return;
    }
  };

  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Mật khẩu hiện tại" name="currentPassword">
          <Input.Password
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="Mật khẩu mới"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu mới",
            },
            {
              min: 6,
              message: "Mật khẩu phải có ít nhất 6 ký tự",
            },
          ]}
        >
          <Input.Password
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="confirmNewPassword"
          label="Xác nhận mật khẩu mới"
          rules={[
            {
              required: true,
              message: "Vui lòng xác nhận mật khẩu mới",
            },
            {
              validator: (rule, value) => {
                if (
                  value !== newPassword &&
                  newPassword !== "" &&
                  value !== ""
                ) {
                  return Promise.reject("Mật khẩu không khớp");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input.Password
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </Form.Item>

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
