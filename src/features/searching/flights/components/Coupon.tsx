import { Form, Input, Tooltip } from "antd";
import { IoMdHelpCircle } from "react-icons/io";
import { RiCoupon3Line } from "react-icons/ri";

interface CouponProps {
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
}

const Coupon: React.FC<CouponProps> = ({ couponCode, setCouponCode }) => {
  return (
    <Form.Item name="couponCode" initialValue={couponCode}>
      <Input
        className="w-full"
        allowClear
        size="large"
        placeholder="Nhập mã giảm giá"
        prefix={<RiCoupon3Line />}
        suffix={
          <div className="text-gray-400">
            <Tooltip title="Mã giảm giá sẽ được áp dụng vào giá vé cơ bản!!">
              <IoMdHelpCircle className="text-xl" />
            </Tooltip>
          </div>
        }
        onChange={(e) => {
          setCouponCode(e.target.value);
        }}
      />
    </Form.Item>
  );
};

export default Coupon;
