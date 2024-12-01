import { Form, Modal } from "antd";
import ResetPasswordForm from "./ResetPasswordForm";

interface ResetPasswordButtonProps {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
}

const ResetPasswordButton: React.FC<ResetPasswordButtonProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  const [resetPasswordForm] = Form.useForm();

  const handleCloseModal = () => {
    setIsModalVisible(false);
    resetPasswordForm.resetFields();
  };

  return (
    <Modal
      title="Đổi mật khẩu"
      destroyOnClose
      open={isModalVisible}
      onCancel={handleCloseModal}
      footer={null}
    >
      <ResetPasswordForm form={resetPasswordForm} onCancel={handleCloseModal} />
    </Modal>
  );
};

export default ResetPasswordButton;
