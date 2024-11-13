import { useQuery } from "@tanstack/react-query";
import { ConfigProvider, Select } from "antd";
import { SelectProps } from "antd/lib";
import { IoBagAdd } from "react-icons/io5";
import {
  IBookingFlight,
  IPassengersData,
  PassengerTitle,
  PassengerType,
} from "../../../../../interfaces";
import { baggageService } from "../../../../../services/booking/baggage-service";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPassengerInfo } from "../../../../../redux/slices/passengersSlice";

interface AddBaggageProps {
  type: string;
  flightData: IBookingFlight;
  passengers: IPassengersData;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const AddBaggage: React.FC<AddBaggageProps> = ({
  type,
  flightData,
  passengers,
  setTotalPrice,
}) => {
  const dispatch = useDispatch();
  const formattedPassengers = passengers.passengersInfo.filter(
    (passenger) => passenger.passengerType !== PassengerType.INFANT,
  );
  const [prices, setPrices] = useState<number[]>([
    ...Array<number>(formattedPassengers.length).fill(0),
  ]);
  const { data } = useQuery({
    queryKey: ["baggage"],
    queryFn: baggageService.getAll,
  });
  const baggageData = data?.payload;
  const baggageOptionsFormatted = baggageData
    ?.filter(
      (baggage) => baggage.routeType === flightData.flight.route.routeType,
    )
    .map((baggage) => {
      return {
        value: baggage.baggageId,
        label: `${baggage.baggageWeight}kg`,
      };
    });

  const labelRender: SelectProps["labelRender"] = (props) => {
    const { label } = props;
    if (label) {
      const selectedBaggage = baggageData?.find(
        (baggage) => baggage.baggageId === props.value,
      );
      return (
        <div className="text-heading-3 text-base">
          <span className="font-normal">
            {selectedBaggage?.baggageWeight}kg -{" "}
          </span>

          <span className="text-green-700">
            {selectedBaggage?.baggagePricing[0].price.toLocaleString()} VND
          </span>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    const newTotalPrice = prices.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(newTotalPrice);
  }, [prices, setTotalPrice]);
  console.log(prices);

  // const baggageIDToPrice = (baggageID: number) => {
  //   const selectedBaggage = baggageData?.find(
  //     (baggage) => baggage.baggageId === baggageID,
  //   );
  //   return selectedBaggage?.baggagePricing[0].price;
  // };

  const calculateTotalPrice = (passengerIndex: number, baggageID: number) => {
    const selectedBaggage = baggageData?.find(
      (baggage) => baggage.baggageId === baggageID,
    );
    const price = selectedBaggage?.baggagePricing[0].price;
    setPrices((prev) => {
      const newPrices = [...prev];
      newPrices[passengerIndex] = price !== undefined ? price : 0;
      return newPrices;
    });

    if (type === "departure") {
      dispatch(
        setPassengerInfo({
          index: passengerIndex,
          passengerInfo: {
            ...formattedPassengers[passengerIndex],
            services: {
              ...formattedPassengers[passengerIndex].services,
              depart: {
                baggage: selectedBaggage,
              },
            },
          },
        }),
      );
    } else if (type === "arrival") {
      dispatch(
        setPassengerInfo({
          index: passengerIndex,
          passengerInfo: {
            ...formattedPassengers[passengerIndex],
            services: {
              ...formattedPassengers[passengerIndex].services,
              return: {
                baggage: selectedBaggage,
              },
            },
          },
        }),
      );
    }
  };

  //   const handleOnClear = (passengerIndex: number) => {
  //     setPrices((prev) => {
  //       const newPrices = [...prev];
  //       newPrices[passengerIndex] = 0;
  //       return newPrices;
  //     });
  //   };

  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <IoBagAdd className="text-2xl text-blue-900" />
        <p className="text-heading-3 text-blue-900">Mua thêm hành lý ký gửi</p>
      </div>

      <div>
        {formattedPassengers.map((passenger, index) => (
          <div
            key={index}
            className="text-heading-3 text-heading-3 flex items-center justify-between border-t border-gray-300 px-6 py-2 text-base text-green-700"
          >
            <div className="">
              {passenger.passengerTitle === PassengerTitle.MR_valueOf
                ? PassengerTitle.MR
                : passenger.passengerTitle === PassengerTitle.MRS_valueOf
                  ? PassengerTitle.MRS
                  : passenger.passengerTitle === PassengerTitle.MS_valueOf
                    ? PassengerTitle.MS
                    : passenger.passengerTitle === PassengerTitle.MSTR_valueOf
                      ? PassengerTitle.MSTR
                      : passenger.passengerTitle ===
                          PassengerTitle.MISS_valueOf &&
                        PassengerTitle.MISS}{" "}
              {passenger.lastName} {passenger.firstName}
            </div>

            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    colorPrimary: "#1e40af",
                    colorPrimaryHover: "#1e40af",
                  },
                },

                token: {
                  lineWidth: 2,
                },
              }}
            >
              <Select
                allowClear
                style={{ width: 200 }}
                placeholder="Chọn hành lý"
                options={baggageOptionsFormatted}
                onChange={(price) => calculateTotalPrice(index, price)}
                // onClear={() => handleOnClear(index)}
                labelRender={labelRender}
                optionRender={(option) => (
                  <div className="text-heading-3 text-base text-green-700">
                    <span>{option.label}</span>
                  </div>
                )}
              />
            </ConfigProvider>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddBaggage;
