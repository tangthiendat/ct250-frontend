import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="flex justify-between items-center py-4 px-6 bg-white border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <p>&copy; 2024 Bamboo Airways. All Rights Reserved.</p>
          <p>Business Registration Code: 0107867370</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src="dmca.png" alt="DMCA Protected" className="h-8" />
          <img src="bo-cong-thuong.png" alt="Bộ Công Thương" className="h-8" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
