import { Form, Input } from "antd";
import React from "react";

const NewPasswordFields: React.FC = () => (
  <>
    <Form.Item
      label="Mật khẩu mới"
      name="newPassword"
      rules={[
        {
          required: true,
          message: "Vui lòng nhập mật khẩu mới",
        },
        {
          min: 6,
          message: "Mật khẩu phải chứa ít nhất 6 ký tự",
        },
      ]}
      hasFeedback
    >
      <Input.Password placeholder="Mật khẩu mới" />
    </Form.Item>

    <Form.Item
      label="Xác nhận mật khẩu mới"
      name="confirmNewPassword"
      dependencies={["newPassword"]}
      rules={[
        {
          required: true,
          message: "Vui lòng xác nhận mật khẩu mới",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("newPassword") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
          },
        }),
      ]}
      hasFeedback
    >
      <Input.Password placeholder="Xác nhận mật khẩu mới" />
    </Form.Item>
  </>
);

export default NewPasswordFields;