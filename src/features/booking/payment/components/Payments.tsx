import { useMutation } from "@tanstack/react-query";
import { Divider } from "antd";
import { useState } from "react";
import { MdExpandMore, MdWatchLater } from "react-icons/md";
import { TransactionType } from "../../../../interfaces";
import { useAppSelector } from "../../../../redux/hooks";
import { transactionService } from "../../../../services/transaction/transaction-service";

interface PaymentsProps {
  totalBookingPrice: number;
}

const Payments: React.FC<PaymentsProps> = ({ totalBookingPrice }) => {
  const [showVNPayExpand, setShowVNPayExpand] = useState<boolean>(false);
  const [showPayLaterExpand, setShowPayLaterExpand] = useState<boolean>(false);
  const booking = useAppSelector((state) => state.booking);
  const flightSearch = useAppSelector((state) => state.flightSearch);

  const { mutate: createTransaction } = useMutation({
    mutationFn: transactionService.createTransaction,
    onSuccess: (data) => {
      if (data.payload && data.payload.paymentMethod.paymentUrl) {
        window.location.href = data.payload.paymentMethod.paymentUrl;
      }
    },
  });

  function handlePaymentButtonClick() {
    localStorage.setItem("booking", JSON.stringify(booking));
    localStorage.setItem("flightSearch", JSON.stringify(flightSearch));

    createTransaction({
      booking: booking,
      paymentMethod: {
        paymentMethodId: 1,
        paymentMethodName: "VNPay",
      },
      transactionType: TransactionType.PAYMENT,
    });
  }

  return (
    <>
      <div className="overflow-hidde w-full rounded-lg bg-white p-4 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
        <div
          className={`${showVNPayExpand ? "rounded-t-md" : "rounded-md"} flex cursor-pointer items-center justify-between px-2 py-2 transition-all duration-200 hover:bg-slate-100 md:py-4 lg:py-8`}
          onClick={() => setShowVNPayExpand(!showVNPayExpand)}
        >
          <div className="flex w-full items-center gap-10">
            <div className="flex w-[10%] justify-center">
              <img src="/pages/payment/vnpayQR_logo.png" alt="logo vnpay" />
            </div>

            <p className="text-heading-3 text-blue-800">
              Thanh toán bằng mã VNPAY-QR
            </p>
          </div>

          <div>
            <MdExpandMore
              className={`${showVNPayExpand ? "rotate-0" : "-rotate-90"} transform text-xl duration-200`}
            />
          </div>
        </div>

        <div
          className={`${showVNPayExpand ? "h-[100px]" : "h-0"} flex flex-col justify-between overflow-hidden transition-all duration-200`}
        >
          <Divider type="horizontal" className="my-5 bg-slate-300" />

          <div className="flex justify-center">
            <button
              className="text-heading-3 rounded-lg bg-green-700 px-4 py-2 text-white"
              onClick={handlePaymentButtonClick}
            >
              Thanh toán {totalBookingPrice.toLocaleString()} VND
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
        <div
          className={`${showPayLaterExpand ? "rounded-t-md" : "rounded-md"} flex cursor-pointer items-center justify-between px-2 py-2 transition-all duration-200 hover:bg-slate-100 md:py-4 lg:py-8`}
          onClick={() => setShowPayLaterExpand(!showPayLaterExpand)}
        >
          <div className="flex w-full items-center gap-10">
            <div className="flex w-[10%] justify-center">
              <MdWatchLater className="text-4xl text-blue-800" />
            </div>

            <p className="text-heading-3 text-blue-800">Thanh toán sau</p>
          </div>

          <div>
            <MdExpandMore
              className={`${showPayLaterExpand ? "rotate-0" : "-rotate-90"} transform text-xl duration-200`}
            />
          </div>
        </div>

        <div
          className={`${showPayLaterExpand ? "h-[100px]" : "h-0"} flex flex-col justify-between overflow-hidden transition-all duration-200`}
        >
          <Divider type="horizontal" className="my-5 bg-slate-300" />

          <div className="flex justify-center">
            <button className="text-heading-3 rounded-lg bg-green-700 px-4 py-2 text-white">
              Thanh toán {totalBookingPrice.toLocaleString()} VND
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
