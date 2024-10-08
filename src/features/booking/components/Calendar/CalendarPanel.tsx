import { Carousel } from "antd";
import AbleCell from "./AbleCell";
import DisableCell from "./DisableCell";
import CustomPrevArrow from "../../../../common/CustomPrevArrow";
import CustomNextArrow from "../../../../common/CustomNextArrow";
import { useQuery } from "@tanstack/react-query";
import useSearchData from "../../hooks/useSearchData";
import dayjs from "dayjs";
import { flightScheduleService } from "../../../../services";

interface CalendarPanelProps {
  show: boolean;
}

const CalendarPanel: React.FC<CalendarPanelProps> = ({ show }) => {
  const { flightSearch } = useSearchData();
  const startDate = dayjs(flightSearch.departureDate)
    .add(-7, "day")
    .format("YYYY-MM-DD");
  const endDate = dayjs(flightSearch.departureDate)
    .add(7, "day")
    .format("YYYY-MM-DD");
  const { data } = useQuery({
    queryKey: ["flights", "overviews", { startDate, endDate }],
    queryFn: () => flightScheduleService.getOverview(startDate, endDate),
  });
  const cellsContent = data?.payload || [];

  const calculateHeight = (price: number) => {
    const maxPrice = cellsContent.reduce(
      (max, cell) => (cell.minPriceOfDay > max ? cell.minPriceOfDay : max),
      cellsContent[0].minPriceOfDay,
    );

    const minPrice = cellsContent.reduce(
      (min, cell) => (cell.minPriceOfDay < min ? cell.minPriceOfDay : min),
      cellsContent[0].minPriceOfDay,
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
                  {new Date(cell.date) < new Date() || !cell.hasFlight ? (
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
