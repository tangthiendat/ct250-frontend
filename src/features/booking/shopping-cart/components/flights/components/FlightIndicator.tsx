import { ConfigProvider, Timeline } from "antd";
import { IBookingFlight } from "../../../../../../interfaces";
import { getFormattedDuration } from "../../../../../../utils";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";

interface FlightIndicatorProps {
  data: IBookingFlight;
}

const FlightIndicator: React.FC<FlightIndicatorProps> = ({ data }) => {
  const formattedDuration = getFormattedDuration(data.flight.route.duration);

  return (
    <div className="flex flex-1 flex-col items-center">
      <p className="title-4 font-semibold">Tóm tắt hành trình</p>

      <div className="flex w-full px-2">
        <div className="flex w-[25%] items-center justify-center">
          <p className="title-4 font-bold text-green-700">
            {formattedDuration}
          </p>
        </div>

        <ConfigProvider
          theme={{
            components: {
              Timeline: {
                tailWidth: 3,
                tailColor: "#1677ff",
              },
            },
          }}
        >
          <Timeline
            className="w-full"
            items={[
              {
                dot: <MdFlightTakeoff />,
                children: (
                  <>
                    <p className="text-heading-3 text-green-700">
                      {new Date(
                        data.flight.departureDateTime,
                      ).toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      {data.flight.route.departureAirport.cityName}
                    </p>
                    <p className="title-4">
                      {data.flight.route.departureAirport.airportName}
                    </p>
                  </>
                ),
                style: {
                  marginTop: 35,
                },
              },
              {
                dot: <MdFlightLand className="timeline-flight-icon" />,
                children: (
                  <>
                    <p className="text-heading-3 text-green-700">
                      {new Date(data.flight.arrivalDateTime).toLocaleTimeString(
                        "vi-VN",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}{" "}
                      {data.flight.route.arrivalAirport.cityName}
                    </p>
                    <p className="title-4">
                      {data.flight.route.arrivalAirport.airportName}
                    </p>
                  </>
                ),
                style: {
                  padding: 0,
                },
              },
            ]}
          />
        </ConfigProvider>
      </div>

      <div className="title-4">
        <p>
          Số hiệu chuyến bay:{" "}
          <span className="font-medium text-blue-800">
            {data.flight.flightId}
          </span>
        </p>

        <p>
          Số hiệu máy bay:{" "}
          <span className="font-medium text-blue-800">
            {data.flight.airplane.registrationNumber}
          </span>
        </p>

        <p>
          Model:{" "}
          <span className="font-medium text-blue-800">
            {data.flight.airplane.model.modelName}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FlightIndicator;
