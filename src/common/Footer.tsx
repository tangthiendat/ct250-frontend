import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="rounded-3xl border-t border-gray-200 bg-white py-5 shadow-[0px_-15px_25px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col items-center md:flex-row">
          <div className="text m-5 flex-1 text-center text-gray-600">
            <p>&copy; 2024 DaViKa Airways. All Rights Reserved.</p>
          </div>

          <div className="text m-5 flex-1 text-center text-gray-600 min-[1355px]:flex">
            <p className="flex-1">Payment methods:</p>
            <div className="flex flex-1 items-center justify-center space-x-4">
              <img src="/footer/paypal_logo.png" alt="Paypal" className="h-8" />
              <img src="/footer/vnpayQR_logo.png" alt="VNPay" className="h-8" />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center space-x-4">
            <img
              src="/footer/dmca_logo.png"
              alt="DMCA Protected"
              className="h-8"
            />
            <img
              src="/footer/bocongthuong_logo.png"
              alt="Bộ Công Thương"
              className="h-12"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
