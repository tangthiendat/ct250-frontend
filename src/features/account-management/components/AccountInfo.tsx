import { Button, Card, Descriptions, Form, Input, message, Modal } from "antd";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaEye, FaEyeSlash, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const initialInfo = {
  phone: "0123456789",
  email: "testemail@gmail.com",
  password: "password123",
};

const AccountInfo: React.FC = () => {
  const [accountInfo, setAccountInfo] = useState(initialInfo);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [form] = Form.useForm();

  const [newPassword] = useState<string>(accountInfo.password);
  const [confirmPassword] = useState<string>(accountInfo.password);

  const showModal = () => {
    form.setFieldsValue(accountInfo);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setAccountInfo((prevInfo) => ({
          ...prevInfo,
          phone: values.phone,
          email: values.email,
          password: values.newPassword,
        }));

        message.success("Cập nhật thông tin tài khoản thành công!");
        handleCancel();
      })
      .catch((error) => {
        console.log("Validate Failed:", error);
      });
  };

  return (
    <>
      <Card
        className="flex-1 shadow-lg md:shadow-md"
        title="Thông tin tài khoản"
        extra={
          <Button icon={<CiEdit />} onClick={showModal}>
            Chỉnh sửa
          </Button>
        }
      >
        <Descriptions column={1}>
          <Descriptions.Item
            label={
              <div className="flex items-center gap-2">
                <FaPhoneAlt /> <strong>Số điện thoại</strong>
              </div>
            }
          >
            <strong>{accountInfo.phone}</strong>
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <div className="flex items-center gap-2">
                <MdEmail /> <strong>Email</strong>
              </div>
            }
          >
            <strong>{accountInfo.email}</strong>
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <div className="flex items-center gap-2">
                <FaLock /> <strong>Mật khẩu</strong>
              </div>
            }
          >
            <div className="flex items-center justify-center gap-2 pt-0">
              <strong>
                {showPassword
                  ? accountInfo.password
                  : accountInfo.password.replace(/./g, "*")}
              </strong>
              <Button
                type="link"
                className="h-0"
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Modal
        title="Chỉnh sửa thông tin tài khoản"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Vui lòng nhập email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="Mật khẩu mới"
            initialValue={newPassword}
            hasFeedback
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu mới"
            initialValue={confirmPassword}
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu mới" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu mới không khớp"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AccountInfo;
