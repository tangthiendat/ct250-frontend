import React from "react";
import { Button, ConfigProvider } from "antd";
import { createStyles } from "antd-style";
import { useState } from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdFlight, MdFlightTakeoff } from "react-icons/md";
import SearchFlightsForm from "./SearchFlightsForm";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #0000d0, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

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
  const { styles } = useStyle();

  return (
    <div>
      <div className="relative top-[-60px] flex justify-center max-[768px]:hidden md:px-4">
        <div className="md:w-[70%]">
          <div className="flex justify-center">
            {btnItems.map((item) => (
              <div className="flex-1" key={item.key}>
                <div
                  className={`${item.key === formActive ? "bg-blue-700 text-white" : "bg-blue-600/60"} flex cursor-pointer items-center justify-center gap-2 p-4 text-lg uppercase text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600`}
                  onClick={() => setFormActive(item.key)}
                >
                  {item.icon}
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="m-1 flex justify-between rounded-sm p-3 shadow min-[768px]:hidden">
        <ConfigProvider>
          {btnItems.map((item) => (
            <Button
              key={item.key}
              type="primary"
              className={`${styles.linearGradientButton} h-12 w-[30%]`}
              icon={item.icon}
              onClick={() => {
                setFormActive(item.key);
              }}
            >
              {item.children}
            </Button>
          ))}
        </ConfigProvider>
      </div>

      <div className="relative md:top-[-60px] md:flex md:justify-center md:px-4">
        <div className="rounded-bl-md rounded-br-md p-2 shadow-md md:w-[70%]">
          {formActive === "booking" && <SearchFlightsForm />}
          {formActive === "checkin" && <div></div>}
          {formActive === "my-tickets" && <div></div>}
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
