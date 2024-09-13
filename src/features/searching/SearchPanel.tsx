import { ISearchFlights } from "../../interfaces";
import { Button, ConfigProvider, Space } from "antd";
import { MdFlight, MdFlightTakeoff } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { createStyles } from "antd-style";
import Tabs from "../../common/Tabs";
import { useState } from "react";
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
    <>
      <div className="relative top-[-64px] flex justify-center max-[768px]:hidden md:px-4">
        <Tabs
          tabItemActive={formActive}
          setTabItemActive={setFormActive}
          tabItems={btnItems}
        >
          {formActive === "booking" && <SearchFlightsForm />}
          {formActive === "checkin" && <div></div>}
          {formActive === "my-tickets" && <div></div>}
        </Tabs>
      </div>

      <div className="bg-re-700 m-1 flex justify-between rounded-sm p-3 shadow min-[768px]:hidden">
        <ConfigProvider>
          {/* <Space> */}
          {btnItems.map((item) => (
            <Button
              key={item.key}
              type="primary"
              className={`${styles.linearGradientButton} h-12 w-[30%]`}
              icon={item.icon}
            >
              {item.children}
            </Button>
          ))}
          {/* </Space> */}
        </ConfigProvider>
      </div>
    </>
  );
};

export default SearchPanel;
