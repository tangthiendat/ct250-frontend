import React, { useState } from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdFlight, MdFlightTakeoff } from "react-icons/md";
import SearchFlightsForm from "./flights/SearchFlightsForm";
import CheckinForm from "./checkin/CheckinForm";
import SearchTicketForm from "./ticket/SearchTicketForm";

const btnItems = [
  {
    key: "booking",
    label: "Đặt vé",
    icon: <MdFlight />,
    children: "Đặt vé",
  },
  {
    key: "checkin",
    label: "Check-in",
    icon: <MdFlightTakeoff />,
    children: "Check-in",
  },
  {
    key: "my-tickets",
    label: "Vé của tôi",
    icon: <BiSolidPurchaseTag />,
    children: "Vé của tôi",
  },
];

const SearchPanel: React.FC = () => {
  const [formActive, setFormActive] = useState("booking");

  return (
    <>
      <div className="relative flex justify-center py-6 transition-all duration-1000 md:px-4">
        <div className="w-[90%] transition-all duration-1000 md:w-[70%]">
          <div className="flex justify-center gap-2 transition-all duration-1000 md:gap-12">
            {btnItems.map((item) => (
              <div className="flex-1" key={item.key}>
                <div
                  className={`${
                    formActive === ""
                      ? "bg-blue-700 p-2 text-white"
                      : item.key === formActive
                        ? "bg-blue-700 text-white"
                        : "bg-slate-300 text-black"
                  } text flex cursor-pointer items-center justify-center gap-2 rounded-3xl p-2 uppercase transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600`}
                  onClick={() => {
                    if (item.key === formActive) {
                      setFormActive("");
                    } else {
                      setFormActive(item.key);
                    }
                  }}
                >
                  {item.icon}
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative transition-all duration-1000 md:flex md:justify-center md:px-4">
        <div className="rounded-bl-md rounded-br-md bg-white shadow-2xl transition-all duration-1000 md:w-[70%]">
          {formActive === "booking" && <SearchFlightsForm />}
          {formActive === "checkin" && <CheckinForm />}
          {formActive === "my-tickets" && <SearchTicketForm />}
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
