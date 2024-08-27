import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-white border-t border-gray-200">
        <div className="text-sm text-gray-600 m-5">
          <p>&copy; 2024 DaViKa Airways. All Rights Reserved.</p>
        </div>

        <div className="text-sm text-gray-600 m-5">
          Payment methods
          <div className="flex items-center space-x-4">
            <img src="/paypal_logo.png" alt="Paypal" className="h-8" />
            <img src="/vnpayQR_logo.png" alt="VNPay" className="h-8" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img src="/dmca_logo.png" alt="DMCA Protected" className="h-8" />
          <img src="/bocongthuong_logo.png" alt="Bộ Công Thương" className="h-12" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
