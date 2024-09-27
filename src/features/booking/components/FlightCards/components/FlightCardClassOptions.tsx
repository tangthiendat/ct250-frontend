import { MdExpandMore } from "react-icons/md";

interface FlightCardClassOptionsProps {
  showEconomyClass: boolean;
  showBusinessClass: boolean;
  handleShowEconomyClass: () => void;
  handleShowBusinessClass: () => void;
  handleCloseDetailClass: () => void;
}

const FlightCardClassOptions: React.FC<FlightCardClassOptionsProps> = ({
  showEconomyClass,
  showBusinessClass,
  handleShowEconomyClass,
  handleShowBusinessClass,
  handleCloseDetailClass,
}) => {
  return (
    <>
      <div
        className="flex-1 cursor-pointer bg-green-700"
        onClick={() => {
          if (showEconomyClass === false) {
            handleShowEconomyClass();
          } else {
            handleCloseDetailClass();
          }
        }}
      >
        <div className="flex flex-col items-center py-2 text-white">
          <p className="font-bold">Economy</p>
          <div className="my-2 flex flex-col items-center">
            <p>từ</p>
            <p className="text-xl font-bold">1.565.000</p>
            <p>VND</p>
          </div>

          <MdExpandMore
            className={`${showEconomyClass ? "rotate-180 text-3xl" : "rotate-0"} transform text-white duration-500`}
          />
        </div>
      </div>

      <div
        className="flex-1 cursor-pointer bg-blue-800"
        onClick={() => {
          if (showBusinessClass === false) {
            handleShowBusinessClass();
          } else {
            handleCloseDetailClass();
          }
        }}
      >
        <div className="flex flex-col items-center py-2 text-white">
          <p className="font-bold">Business</p>
          <div className="my-2 flex flex-col items-center">
            <p>từ</p>
            <p className="text-xl font-bold">3.565.000</p>
            <p>VND</p>
          </div>

          <MdExpandMore
            className={`${showBusinessClass ? "rotate-180 text-3xl" : "rotate-0"} transform text-white duration-500`}
          />
        </div>
      </div>
    </>
  );
};

export default FlightCardClassOptions;
