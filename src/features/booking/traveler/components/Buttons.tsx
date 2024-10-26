import usePassengersData from "../hooks/usePassengersData";

interface ButtonsProps {
  isEditing: boolean;
  handleNextButtonClick: () => void;
  handlePreviousButtonClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({
  isEditing,
  handleNextButtonClick,
  handlePreviousButtonClick,
}) => {
  const { travelerIndex, totalPassenger } = usePassengersData();

  return (
    <>
      {isEditing ? (
        <div className="flex justify-end">
          <button
            className="text-heading-3 mt-5 w-[30%] text-balance rounded-lg bg-green-700 py-2 text-white transition-all duration-200 hover:bg-green-800"
            onClick={handleNextButtonClick}
            type="submit"
            form="form"
          >
            Hoàn tất
          </button>
        </div>
      ) : (
        <div className="flex justify-between">
          <button
            className={`${travelerIndex !== 0 ? "bg-blue-800 hover:bg-blue-900" : "cursor-not-allowed bg-gray-300"} text-heading-3 mt-5 w-[30%] text-balance rounded-lg py-2 text-white transition-all duration-200`}
            disabled={travelerIndex === 0}
            onClick={handlePreviousButtonClick}
          >
            Hành khách trước đó
          </button>

          <button
            className={`${travelerIndex === totalPassenger - 1 ? "bg-green-700 hover:bg-green-800" : "bg-blue-800 hover:bg-blue-900"} text-heading-3 mt-5 w-[30%] text-balance rounded-lg py-2 text-white transition-all duration-200`}
            onClick={handleNextButtonClick}
            type="submit"
            form="form"
          >
            {travelerIndex === totalPassenger - 1
              ? "Hoàn tất"
              : "Hành khách tiếp theo"}
          </button>
        </div>
      )}
    </>
  );
};

export default Buttons;
