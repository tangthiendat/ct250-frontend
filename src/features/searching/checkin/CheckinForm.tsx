import { Button, Form, Input } from "antd";
import { ICheckin } from "../../../interfaces";
import { useState } from "react";
import Title from "antd/es/typography/Title";

type SizeType = Parameters<typeof Form>[0]["size"];

function onSubmit(data: ICheckin): void {
  console.log(data);
}

const CheckinForm: React.FC = () => {
  const [form] = Form.useForm();

  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleFinish = (values: any) => {
    const data = {
      ...values,
      fullName: values.fullName
        .toLowerCase()
        .trim()
        .split(" ")
        .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" "),
    };
    onSubmit(data);
  };

  return (
    <>
      <Title
        level={5}
        style={{ color: "blue", fontStyle: "italic", paddingLeft: 10 }}
      >
        Làm thủ tục checkin trực tuyến trong khoảng 24 giờ đến 1 giờ trước khi
        chuyến bay khởi hành.
      </Title>
      <Form
        form={form}
        onFinish={handleFinish}
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        className="p-2"
        layout="vertical"
      >
        <div className="flex flex-col sm:flex-row sm:gap-10">
          <div className="flex-1">
            <Form.Item
              label="MÃ ĐẶT CHỖ/MÃ VÉ"
              name="reservationCode"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mã đặt chỗ",
                },
              ]}
            >
              <Input
                className="uppercase"
                size="large"
                placeholder="1234XXXXXXXX"
              />
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
              label="TÊN HÀNH KHÁCH"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ tên hành khách",
                },
              ]}
            >
              <Input
                className="uppercase"
                size="large"
                placeholder="Nguyễn Văn A"
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex justify-center">
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              className="w-40"
            >
              Check-in
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default CheckinForm;
