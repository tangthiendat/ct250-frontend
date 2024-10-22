import { DatePicker, Form, Input, Select } from "antd";
import TravelerInfoForm from "./TravelerInfoForm";

interface TravelerInfoCardProps {}

const TravelerInfoCard: React.FC<TravelerInfoCardProps> = ({}) => {
  return (
    <div className="mx-auto mt-5 max-w-screen-md px-2 transition-all duration-1000 xl:max-w-screen-lg">
      <div className="rounded-lg bg-slate-100 px-20 py-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
        <p className="text-heading-3 mb-4 text-center text-blue-900">
          Thông tin cá nhân
        </p>

        <TravelerInfoForm />
      </div>
    </div>
  );
};

export default TravelerInfoCard;
