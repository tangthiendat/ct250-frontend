import { Form, Input } from "antd";
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
        size="large"
        placeholder="Nhập mã giảm giá"
        prefix={<RiCoupon3Line />}
        onChange={(e) => {
          setCouponCode(e.target.value);
        }}
      />
    </Form.Item>
  );
};

export default Coupon;
