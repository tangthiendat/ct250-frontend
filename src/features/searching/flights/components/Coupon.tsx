import { Form, Input } from "antd";
import { RiCoupon3Line } from "react-icons/ri";
import { setCouponCode } from "../../../../redux/slices/flightSearchSlice";
import useSearchData from "../../../booking/hooks/useSearchData";

const Coupon: React.FC = () => {
  const { dispatch } = useSearchData();

  return (
    <Form.Item name="couponCode">
      <Input
        className="w-full"
        size="large"
        placeholder="Nhập mã giảm giá"
        prefix={<RiCoupon3Line />}
        onChange={(e) => {
          dispatch(setCouponCode(e.target.value));
        }}
      />
    </Form.Item>
  );
};

export default Coupon;
