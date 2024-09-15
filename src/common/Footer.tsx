import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-600">Payment methods:</p>
            <div className="mt-2 flex items-center space-x-4">
              <img
                src="/footer/paypal_logo.png"
                alt="Paypal"
                className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <img
                src="/footer/vnpayQR_logo.png"
                alt="VNPay"
                className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Certification Logos Section */}
        <div className="mt-6 flex items-center justify-center space-x-6 md:mt-0">
          <img
            src="/footer/dmca_logo.png"
            alt="DMCA Protected"
            className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src="/footer/bocongthuong_logo.png"
            alt="Bộ Công Thương"
            className="h-12 transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-300 pt-6 text-center text-gray-600">
        <p className="font-semibold">
          &copy; 2024 DaViKa Airways. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
