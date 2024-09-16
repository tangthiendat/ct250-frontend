import { useState } from "react";
import {
  Avatar,
  Card,
  Descriptions,
  Modal,
  Input,
  Button,
  Form,
  message,
} from "antd";
import { CiEdit } from "react-icons/ci";

const initialPersonalInfo = {
  avatar: (
    <Avatar shape="square" size={120}>
      P
    </Avatar>
  ),
  name: "Phạm Quốc Khang",
  dob: "01/01/2000",
  passport: "123456789",
  nationality: "Việt Nam",
};

const initialContactInfo = {
  phone: "+84123456789",
  email: "test@gmail.com",
  country: "Việt Nam",
  city: "Cần Thơ",
  district: "Ninh Kiều",
  address: "123 Đường ABC",
  postalCode: "123456",
};

const PersonalInfo: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [contactInfo, setContactInfo] = useState(initialContactInfo);
  const [isPersonalInfoModalVisible, setIsPersonalInfoModalVisible] =
    useState(false);
  const [isContactInfoModalVisible, setIsContactInfoModalVisible] =
    useState(false);
  const [form] = Form.useForm();

  const showPersonalInfoModal = () => {
    form.setFieldsValue(personalInfo);
    setIsPersonalInfoModalVisible(true);
  };

  const showContactInfoModal = () => {
    form.setFieldsValue(contactInfo);
    setIsContactInfoModalVisible(true);
  };

  const handlePersonalInfoOk = () => {
    form.validateFields().then((values) => {
      setPersonalInfo((prevInfo) => ({
        ...prevInfo,
        ...values,
      }));
      message.success("Cập nhật thông tin cá nhân thành công!");
      setIsPersonalInfoModalVisible(false);
    });
  };

  const handleContactInfoOk = () => {
    form.validateFields().then((values) => {
      setContactInfo((prevInfo) => ({
        ...prevInfo,
        ...values,
      }));
      message.success("Cập nhật thông tin liên hệ thành công!");
      setIsContactInfoModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsPersonalInfoModalVisible(false);
    setIsContactInfoModalVisible(false);
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <Card
        className="flex-1 shadow md:shadow-md"
        title="Thông tin cá nhân"
        bordered={true}
        extra={
          <Button icon={<CiEdit />} onClick={showPersonalInfoModal}>
            Chỉnh sửa
          </Button>
        }
      >
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex items-center justify-center">
            {personalInfo.avatar}
          </div>
          <Descriptions
            column={{
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 2,
              xxl: 2,
            }}
          >
            <Descriptions.Item label={<strong>Họ tên</strong>}>
              <strong>{personalInfo.name}</strong>
            </Descriptions.Item>
            <Descriptions.Item label={<strong>Ngày sinh</strong>}>
              <strong>{personalInfo.dob}</strong>
            </Descriptions.Item>
            <Descriptions.Item label={<strong>Số hộ chiếu</strong>}>
              <strong>{personalInfo.passport}</strong>
            </Descriptions.Item>
            <Descriptions.Item label={<strong>Quốc tịch</strong>}>
              <strong>{personalInfo.nationality}</strong>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Card>

      <Card
        className="flex-1 shadow md:shadow-md"
        title="Thông tin liên hệ"
        bordered={true}
        extra={
          <Button icon={<CiEdit />} onClick={showContactInfoModal}>
            Chỉnh sửa
          </Button>
        }
      >
        <Descriptions
          column={{
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 2,
            xxl: 2,
          }}
        >
          <Descriptions.Item label={<strong>Số điện thoại</strong>}>
            <strong>{contactInfo.phone}</strong>
          </Descriptions.Item>
          <Descriptions.Item label={<strong>Email</strong>}>
            <strong>{contactInfo.email}</strong>
          </Descriptions.Item>
          <Descriptions.Item label={<strong>Quốc gia</strong>}>
            <strong>{contactInfo.country}</strong>
          </Descriptions.Item>
          <Descriptions.Item label={<strong>Tỉnh/Thành phố</strong>}>
            <strong>{contactInfo.city}</strong>
          </Descriptions.Item>
          <Descriptions.Item label={<strong>Quận/Huyện</strong>}>
            <strong>{contactInfo.district}</strong>
          </Descriptions.Item>
          <Descriptions.Item label={<strong>Địa chỉ</strong>}>
            <strong>{contactInfo.address}</strong>
          </Descriptions.Item>
          <Descriptions.Item label={<strong>Mã bưu điện</strong>}>
            <strong>{contactInfo.postalCode}</strong>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Modal
        title="Chỉnh sửa thông tin cá nhân"
        visible={isPersonalInfoModalVisible}
        onOk={handlePersonalInfoOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Họ tên"
            rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dob"
            label="Ngày sinh"
            rules={[{ required: true, message: "Vui lòng nhập ngày sinh" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="passport"
            label="Số hộ chiếu"
            rules={[{ required: true, message: "Vui lòng nhập số hộ chiếu" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Quốc tịch"
            rules={[{ required: true, message: "Vui lòng nhập quốc tịch" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Chỉnh sửa thông tin liên hệ"
        visible={isContactInfoModalVisible}
        onOk={handleContactInfoOk}
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
            name="country"
            label="Quốc gia"
            rules={[{ required: true, message: "Vui lòng nhập quốc gia" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="Tỉnh/Thành phố"
            rules={[
              { required: true, message: "Vui lòng nhập tỉnh/thành phố" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="district"
            label="Quận/Huyện"
            rules={[{ required: true, message: "Vui lòng nhập quận/huyện" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="postalCode"
            label="Mã bưu điện"
            rules={[{ required: true, message: "Vui lòng nhập mã bưu điện" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PersonalInfo;
