import PricingDetailPanel from "../../shopping-cart/components/flights/components/price/PricingDetailPanel";
import Payments from "./Payments";

interface PaymentDetailProps {
  totalBookingPrice: number;
}

const PaymentDetail: React.FC<PaymentDetailProps> = ({ totalBookingPrice }) => {
  return (
    <div className="mx-auto mt-5 flex max-w-screen-md flex-col gap-4 px-2 transition-all duration-1000 md:gap-8 xl:max-w-screen-lg">
      <div className="overflow-hidden rounded-lg bg-white px-20 py-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
        <PricingDetailPanel totalBookingPrice={totalBookingPrice} />
      </div>

      <div className="flex flex-col items-center gap-4 overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
        <p className="text-heading-3 text-green-800">
          Chọn phương thức thanh toán của Quý khách
        </p>

        <Payments totalBookingPrice={totalBookingPrice} />
      </div>
    </div>
  );
};

export default PaymentDetail;
