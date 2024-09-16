import { useState } from "react";
import { Avatar, Card, Modal, Input, Tooltip, Typography, message } from "antd";
import { CiEdit } from "react-icons/ci";
import { FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const { Title } = Typography;

const MyAccount: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const accountInfo = {
    phone: {
      icon: <FaPhoneAlt />,
      label: "Số điện thoại",
      value: "+84123456789",
    },
    email: {
      icon: <MdEmail />,
      label: "Email",
      value: "testemail@gmail.com",
    },
    password: {
      icon: <FaLock />,
      label: "Mật khẩu",
      value: "dfvfdjhbh",
    },
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (newPassword !== confirmPassword) {
      message.error("Mật khẩu xác nhận không khớp!");
      return;
    }
    // Logic to handle password change
    message.success("Đổi mật khẩu thành công!");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card className="shadow md:shadow-md" bordered={true}>
      <Title level={4}>
        <Avatar icon={accountInfo.phone.icon} className="mr-2" />
        {accountInfo.phone.label}: <i>{accountInfo.phone.value}</i>
      </Title>

      <Title level={4}>
        <Avatar icon={accountInfo.email.icon} className="mr-2" />
        {accountInfo.email.label}: <i>{accountInfo.email.value}</i>
      </Title>

      <Title level={4}>
        <Avatar icon={accountInfo.password.icon} className="mr-2" />
        {accountInfo.password.label}:{" "}
        <i className="relative">
          {"*".repeat(accountInfo.password.value.length)}
          <Tooltip className="absolute -right-10 -top-0" title="Đổi mật khẩu">
            <CiEdit
              className="cursor-pointer text-2xl text-blue-500"
              onClick={showModal}
            />
          </Tooltip>
        </i>
      </Title>

      <Modal
        title="Đổi mật khẩu"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input.Password
          placeholder="Mật khẩu mới"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="mb-2"
        />
        <Input.Password
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Modal>
    </Card>
  );
};

export default MyAccount;
