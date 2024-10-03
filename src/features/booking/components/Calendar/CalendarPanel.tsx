import { Carousel } from "antd";
import AbleCell from "./AbleCell";
import DisableCell from "./DisableCell";
import CustomPrevArrow from "../../../../common/CustomPrevArrow";
import CustomNextArrow from "../../../../common/CustomNextArrow";

interface CalendarPanelProps {
  show: boolean;
}

const cellsContent = [
  {
    date: "24/09/2024",
    price: 888000,
    availableFlight: true,
  },
  {
    date: "25/09/2024",
    price: 2000000,
    availableFlight: true,
  },
  {
    date: "26/09/2024",
    price: 1000000,
    availableFlight: false,
  },
  {
    date: "27/09/2024",
    price: 2500000,
    availableFlight: true,
  },
  {
    date: "28/09/2024",
    price: 3000000,
    availableFlight: true,
  },
  {
    date: "29/09/2024",
    price: 1100000,
    availableFlight: false,
  },
  {
    date: "30/09/2024",
    price: 1200000,
    availableFlight: true,
  },
  {
    date: "01/10/2024",
    price: 1300000,
    availableFlight: true,
  },
  {
    date: "02/10/2024",
    price: 1400000,
    availableFlight: true,
  },
  {
    date: "03/10/2024",
    price: 1500000,
    availableFlight: false,
  },
  {
    date: "04/10/2024",
    price: 1700000,
    availableFlight: true,
  },
  {
    date: "05/10/2024",
    price: 1000000,
    availableFlight: true,
  },
  {
    date: "06/10/2024",
    price: 1000000,
    availableFlight: true,
  },
  {
    date: "07/10/2024",
    price: 1000000,
    availableFlight: true,
  },
  {
    date: "08/10/2024",
    price: 1000000,
    availableFlight: true,
  },
];

const CalendarPanel: React.FC<CalendarPanelProps> = ({ show }) => {
  const calculateHeight = (price: number) => {
    const maxPrice = cellsContent.reduce(
      (max, cell) => (cell.price > max ? cell.price : max),
      cellsContent[0].price,
    );

    const minPrice = cellsContent.reduce(
      (min, cell) => (cell.price < min ? cell.price : min),
      cellsContent[0].price,
    );

    const height = Math.round(
      ((price - minPrice) / (maxPrice - minPrice)) * 100,
    );

    return height + 10;
  };

  return (
    <div className="overflow-hidden">
      <div
        className={`w-full transform rounded-b-lg bg-white shadow-md transition-all duration-200 ${
          show ? "-translate-y-0 pt-7" : "-translate-y-20 opacity-0"
        }`}
      >
        {show && (
          <div className="mt-4">
            <Carousel
              className="mx-4 px-2"
              slidesToShow={9}
              arrows
              dots={false}
              prevArrow={<CustomPrevArrow />}
              nextArrow={<CustomNextArrow />}
              infinite={false}
            >
              {cellsContent.map((cell, index) => (
                <div key={index}>
                  {new Date(cell.date.split("/").reverse().join("/")) <
                    new Date() || !cell.availableFlight ? (
                    <DisableCell cell={cell} />
                  ) : (
                    <AbleCell cell={cell} calculateHeight={calculateHeight} />
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPanel;
