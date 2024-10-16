import { useQuery } from "@tanstack/react-query";
import { Carousel } from "antd";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import CustomArrow from "../../../../../common/CustomArrow";
import { FlightSearchCriteria, TripType } from "../../../../../interfaces";
import { flightScheduleService } from "../../../../../services";
import useSearchData from "../../hooks/useSearchData";
import AbleCell from "./AbleCell";
import DisableCell from "./DisableCell";

interface CalendarPanelProps {
  show: boolean;
}

const CalendarPanel: React.FC<CalendarPanelProps> = ({ show }) => {
  const { flightSearch } = useSearchData();
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );
  let departureDate: string = "";
  let departureLocation: number = 0;
  let arrivalLocation: number = 0;
  if (flightIndex === 0) {
    departureDate = flightSearch.departureDate;
    departureLocation = flightSearch.departureAirport!.airportId;
    arrivalLocation = flightSearch.arrivalAirport!.airportId;
  } else if (flightIndex === 1) {
    departureDate = flightSearch.flightRange[1];
    departureLocation = flightSearch.arrivalAirport!.airportId;
    arrivalLocation = flightSearch.departureAirport!.airportId;
  }

  const startDate = dayjs(departureDate).add(-7, "day").format("YYYY-MM-DD");
  const endDate = dayjs(departureDate).add(7, "day").format("YYYY-MM-DD");
  const criteria: FlightSearchCriteria = {
    departureLocation,
    arrivalLocation,
    departureDate: startDate,
    arrivalDate: endDate,
  };
  const { data } = useQuery({
    queryKey: ["flights", "overviews", criteria],
    queryFn: () => flightScheduleService.getOverview(criteria),
  });
  const cellsContent = data?.payload || [];
  let actualCellsContent = cellsContent;
  if (cellsContent.length > 0) {
    actualCellsContent = cellsContent
      .map((cell) => {
        if (
          flightIndex === 0 &&
          flightSearch.typeTrip === TripType.ROUND_TRIP &&
          dayjs(cell.date).isAfter(dayjs(flightSearch.flightRange[1]))
        ) {
          return {
            ...cell,
            minPriceOfDay: 0,
            hasFlight: false,
          };
        }
        return cell;
      })
      .filter(Boolean);
  }

  const calculateHeight = (price: number) => {
    const maxPrice = actualCellsContent.reduce(
      (max, cell) => (cell.minPriceOfDay > max ? cell.minPriceOfDay : max),
      cellsContent[0].minPriceOfDay,
    );

    const minPrice = actualCellsContent.reduce(
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
              prevArrow={<CustomArrow direction="left" />}
              nextArrow={<CustomArrow direction="right" />}
              infinite={false}
            >
              {actualCellsContent.map((cell, index) => (
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
