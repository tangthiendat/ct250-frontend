import TravelersPrice from "./TravelersPrice";

interface PricingDetailPanelProps {
  totalBookingPrice: number;
}

const PricingDetailPanel: React.FC<PricingDetailPanelProps> = ({
  totalBookingPrice,
}) => {
  return (
    <>
      <div className="space-y-1 py-2">
        <div className="text-heading-2 m-0 flex justify-between text-blue-800">
          <p className="">Tổng giá</p>
          <p>{totalBookingPrice.toLocaleString()} VND</p>
        </div>

        <p className="title-4">
          Giá khứ hồi cho tất cả các hành khách (đã bao gồm thuế, phí và chiết
          khấu).
        </p>
      </div>

      <TravelersPrice />
    </>
  );
};

export default PricingDetailPanel;
