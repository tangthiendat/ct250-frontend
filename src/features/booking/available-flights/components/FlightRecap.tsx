import { Button, Divider } from "antd";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { PiAirplaneInFlightFill } from "react-icons/pi";

import useSearchData from "../hooks/useSearchData";
import useStickyScroll from "../hooks/useStickyScroll";
import ModifyButton from "./ExpansionButton";
import PassengersDetail from "./PassengersDetail";
import { TripType } from "../../../../interfaces";

interface FlightRecapProps {
  showModifyForm: boolean;
  setShowModifyForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlightRecap: React.FC<FlightRecapProps> = ({
  showModifyForm,
  setShowModifyForm,
}) => {
  const { flightSearch: data } = useSearchData();
  const isSticky = useStickyScroll();

  return (
    <div
      className={` ${isSticky ? "-translate-y-0" : `-translate-y-[100%]`} sticky top-0 z-50 transform bg-white shadow-md transition-all duration-500`}
    >
      <div className="mx-auto lg:max-w-screen-xl">
        <div className="flex w-full items-center justify-between bg-white p-2">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <p className="text-lg font-bold">
                  {data.departureAirport?.airportCode}
                </p>

                <div>
                  <div className="mx-2 flex h-3 items-center">
                    <div>
                      <Divider
                        type="horizontal"
                        className="w-16 border-blue-800 md:w-20"
                        dashed
                        variant="dashed"
                      />
                    </div>
                    <PiAirplaneInFlightFill className="text-blue-800" />
                  </div>

                  {data.typeTrip === TripType.ROUND_TRIP && (
                    <div className="mx-2 flex h-3 items-center">
                      <PiAirplaneInFlightFill className="scale-x-[-1] transform text-blue-800" />
                      <div>
                        <Divider
                          type="horizontal"
                          className="w-16 border-blue-800 md:w-20"
                          dashed
                          variant="dashed"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-lg font-bold">
                  {data.arrivalAirport?.airportCode}
                </p>
              </div>

              <div className="flex w-full justify-between">
                <p className="max-w-20 text-left text-sm text-gray-500">
                  {data.departureAirport?.cityName}
                </p>
                <p className="max-w-20 text-right text-sm text-gray-500">
                  {data.arrivalAirport?.cityName}
                </p>
              </div>
            </div>

            <Divider type="vertical" className="h-7 bg-black" />

            <div className="text-center">
              <p className="text-flights_recap_heading text-lg font-bold">
                Ngày khởi hành
              </p>
              <p className="text-sm text-gray-500">
                {new Date(
                  data.flightRange[0].split("/").reverse().join("/"),
                ).toLocaleDateString("vi-VN", {
                  weekday: "narrow",
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </p>
            </div>

            {data.typeTrip === TripType.ROUND_TRIP && (
              <>
                <Divider type="vertical" className="h-7 bg-black" />

                <div className="text-center">
                  <p className="text-flights_recap_heading text-lg font-bold">
                    Ngày về
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(
                      data.flightRange[1].split("/").reverse().join("/"),
                    ).toLocaleDateString("vi-VN", {
                      weekday: "narrow",
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
                  </p>
                </div>
              </>
            )}

            <Divider type="vertical" className="h-7 bg-black" />

            <PassengersDetail />
          </div>

          <Button
            type="primary"
            className="flex h-10 gap-2 rounded-lg text-white transition-colors duration-300"
          >
            <FaShoppingCart className="text-2xl" />
            Vé của bạn
          </Button>
        </div>
      </div>

      <ModifyButton
        showForm={showModifyForm}
        setShowForm={setShowModifyForm}
        titleOpen="Thay đổi"
        titleClose="Đóng"
        moreHandle={() => {
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
};

export default FlightRecap;
