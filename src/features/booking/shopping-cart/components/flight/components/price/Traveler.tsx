import { MdExpandMore } from "react-icons/md";
import ItemsPricing from "./ItemsPricing";

interface TravelerProps {
  type: string;
  numberOfTraveler: number;
  pricing: number;
  showExpand: boolean;
  setShowExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const Traveler: React.FC<TravelerProps> = ({
  type,
  numberOfTraveler,
  pricing,
  showExpand,
  setShowExpand,
}) => {
  return (
    <div
      className={`${showExpand ? "h-64" : "h-10"} overflow-hidden transition-all duration-200`}
    >
      <div
        className="text-heading-3 flex cursor-pointer justify-between p-2 transition-all duration-200 hover:bg-slate-100"
        onClick={() => setShowExpand(!showExpand)}
      >
        <p className="text-blue-900">
          {numberOfTraveler}{" "}
          {type === "adult"
            ? "Người lớn"
            : type === "children"
              ? "Trẻ em"
              : "Em bé"}
        </p>

        <div className="flex items-center">
          <p className="text-blue-900">{pricing.toLocaleString()} VND</p>
          <div>
            <MdExpandMore
              className={`${showExpand ? "rotate-0" : "-rotate-90"} transform duration-200`}
            />
          </div>
        </div>
      </div>

      <div className="px-7">
        <ItemsPricing type={type} />
      </div>
    </div>
  );
};

export default Traveler;
