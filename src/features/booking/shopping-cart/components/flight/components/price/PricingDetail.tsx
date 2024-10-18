import { Modal } from "antd";
import { useCalculatePrice } from "../../hooks/useCalculatePrice";
import TravelerPrice from "./TravelersPrice";
import { IoClose } from "react-icons/io5";

interface PricingDetailProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PricingDetail: React.FC<PricingDetailProps> = ({
  showModal,
  setShowModal,
}) => {
  const { totalPrice } = useCalculatePrice();
  return (
    <>
      <Modal
        // centered
        title={
          <p className="text-heading-1 m-0 text-green-800">Chi tiết giá vé</p>
        }
        open={showModal}
        onCancel={() => setShowModal(false)}
        closeIcon={
          <IoClose className="rounded-md border-[3px] border-slate-400 text-3xl transition-colors duration-200 hover:border-green-800 hover:text-green-800" />
        }
        footer={
          <button
            className="rounded-lg border-[3px] border-slate-400 px-4 py-2 text-lg font-medium text-slate-500 transition-colors duration-200 hover:border-green-800 hover:bg-green-800 hover:text-white"
            onClick={() => setShowModal(false)}
          >
            Đóng
          </button>
        }
        width={1150}
      >
        <div className="space-y-1 py-2">
          <div className="text-heading-2 m-0 flex justify-between text-blue-800">
            <p className="">Tổng giá</p>
            <p>{totalPrice.toLocaleString()} VND</p>
          </div>

          <p className="title-4">
            Giá khứ hồi cho tất cả các hành khách (đã bao gồm thuế, phí và chiết
            khấu).
          </p>
        </div>

        <TravelerPrice />
      </Modal>
    </>
  );
};

export default PricingDetail;
