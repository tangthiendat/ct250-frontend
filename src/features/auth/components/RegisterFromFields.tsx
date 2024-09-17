import React from "react";
import { Form } from "antd";
import NameFields from "./NameFields";
import DateAndGenderFields from "./DateAndGenderFields";
import ContactFields from "./ContactFields";
import IdentityFields from "./IndentityFields";
import PasswordFields from "./PasswordFields";

const RegisterFormFields: React.FC = () => {
  return (
    <>
      <NameFields />
      <DateAndGenderFields />
      <ContactFields />
      <IdentityFields />
      <PasswordFields />
      <Form.Item name="avatar" hidden>
        <input type="hidden" />
      </Form.Item>
    </>
  );
};

export default RegisterFormFields;
