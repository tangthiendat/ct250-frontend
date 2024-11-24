import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import PricingDetailPanel from "./PricingDetailPanel";

interface PricingDetailProps {
  totalBookingPrice: number;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PricingDetail: React.FC<PricingDetailProps> = ({
  totalBookingPrice,
  showModal,
  setShowModal,
}) => {
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
        <PricingDetailPanel totalBookingPrice={totalBookingPrice} />
      </Modal>
    </>
  );
};

export default PricingDetail;
