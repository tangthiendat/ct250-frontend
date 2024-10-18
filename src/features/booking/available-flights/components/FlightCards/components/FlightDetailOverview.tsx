import { Button, ConfigProvider, Modal, Timeline } from "antd";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { IFlightSchedule } from "../../../../../../interfaces";
import { getFormattedDuration } from "../../../../../../utils";

interface FlightDetailOverviewProps {
  flightData: IFlightSchedule;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const FlightDetailOverview: React.FC<FlightDetailOverviewProps> = ({
  flightData,
  open,
  setOpen,
}) => {
  const formattedDuration = getFormattedDuration(flightData.route.duration);

  return (
    <>
      <Modal
        width={400}
        centered
        title={
          <p className="text-heading-2 text-center text-blue-900">
            {flightData.route.departureAirport.cityName} -{" "}
            {flightData.route.arrivalAirport.cityName}
          </p>
        }
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        footer={[
          <Button
            type="primary"
            onClick={() => {
              setOpen(false);
            }}
          >
            Đóng
          </Button>,
        ]}
      >
        <div>
          <div className="title-4">
            <p>
              Khởi hành lúc:{" "}
              <span className="font-medium text-blue-800">
                {new Date(flightData.departureDateTime).toLocaleTimeString(
                  "vi-VN",
                  {
                    year: "numeric",
                    month: "short",
                    weekday: "long",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                  },
                )}
              </span>
            </p>
            <p>
              Thời gian bay:{" "}
              <span className="font-medium text-blue-800">
                {formattedDuration}
              </span>
            </p>
            <p>
              Số hiệu máy bay:{" "}
              <span className="font-medium text-blue-800">
                {flightData.airplane.registrationNumber}
              </span>
            </p>
            <p>
              Model:{" "}
              <span className="font-medium text-blue-800">
                {flightData.airplane.model.modelName}
              </span>
            </p>
          </div>

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
                            flightData.departureDateTime,
                          ).toLocaleTimeString("vi-VN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          {flightData.route.departureAirport.cityName}
                        </p>
                        <p className="title-4">
                          {flightData.route.departureAirport.airportName}
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
                          {new Date(
                            flightData.arrivalDateTime,
                          ).toLocaleTimeString("vi-VN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          {flightData.route.arrivalAirport.cityName}
                        </p>
                        <p className="title-4">
                          {flightData.route.arrivalAirport.airportName}
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
        </div>
      </Modal>
    </>
  );
};

export default FlightDetailOverview;
