import { Divider } from "antd";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { PiAirplaneInFlightFill } from "react-icons/pi";

import { TripType } from "../../../../interfaces";
import useSearchData from "../hooks/useSearchData";
import useStickyScroll from "../hooks/useStickyScroll";
import ModifyButton from "./ExpansionButton";
import PassengersDetail from "./PassengersDetail";

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
              <div className="text-heading-3 flex items-center">
                <p>{data.departureAirport?.airportCode}</p>

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

                <p>{data.arrivalAirport?.airportCode}</p>
              </div>

              <div className="title-4 flex w-full justify-between text-gray-500">
                <p className="max-w-20 text-left">
                  {data.departureAirport?.cityName}
                </p>
                <p className="max-w-20 text-right">
                  {data.arrivalAirport?.cityName}
                </p>
              </div>
            </div>

            <Divider type="vertical" className="h-7 bg-black" />

            <div className="text-center">
              <p className="text-heading-3">Ngày khởi hành</p>
              <p className="title-4 text-gray-500">
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
                  <p className="text-heading-3">Ngày về</p>
                  <p className="title-4 text-gray-500">
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

          <button className="text-heading-3 flex items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-white transition-colors duration-300 hover:bg-blue-800">
            <FaShoppingCart className="text-2xl" />
            Vé của bạn
          </button>
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
