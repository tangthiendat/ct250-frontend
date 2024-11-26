import { useQuery } from "@tanstack/react-query";
import { ConfigProvider, Select } from "antd";
import { SelectProps } from "antd/lib";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  IPassengerData,
  IPassengersData,
  PassengerTitle,
  PassengerType,
} from "../../../../../interfaces";
import { setPassengerInfo } from "../../../../../redux/slices/passengersSlice";
import { mealService } from "../../../../../services";

interface AddMealProps {
  type: string;
  // flightData: IBookingFlight;
  passengers: IPassengersData;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const AddMeal: React.FC<AddMealProps> = ({
  type,
  // flightData,
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
    queryKey: ["meals"],
    queryFn: mealService.getAll,
  });
  const mealData = data?.payload;
  const mealOptionsFormatted = mealData?.map((meal) => {
    return {
      value: meal.mealId,
      label: `${meal.mealName} - ${meal.mealPricing[0].price.toLocaleString()} VND`,
    };
  });

  const handleDefaultPrices = useCallback(() => {
    setPrices((prev) => {
      const newPrices = [...prev];
      formattedPassengers.map((passenger, index) => {
        let price: number | undefined;
        if (type === "departure") {
          price = passenger.services?.depart?.meal?.mealPricing[0].price;
        } else if (type === "arrival") {
          price = passenger.services?.return?.meal?.mealPricing[0].price;
        }

        newPrices[index] = price !== undefined ? price : 0;
      });
      return newPrices;
    });
  }, [formattedPassengers, type]);

  const handleDefaultBaggage = (passenger: IPassengerData) => {
    if (type === "departure") {
      return passenger.services?.depart?.meal?.mealId;
    } else if (type === "arrival") {
      return passenger.services?.return?.meal?.mealId;
    }
  };

  const labelRender: SelectProps["labelRender"] = (props) => {
    const { label } = props;
    if (label) {
      const selectedMeal = mealData?.find(
        (meal) => meal.mealId === props.value,
      );
      return (
        <div className="text-heading-3 text-base">
          <span className="font-semibold text-green-700">
            {selectedMeal?.mealName}
          </span>

          {/* <span className="text-green-700">
            {selectedMeal?.mealPricing[0].price.toLocaleString()} VND
          </span> */}
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    const newTotalPrice = prices.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(newTotalPrice);
    if (prices.every((price) => price === 0)) {
      handleDefaultPrices();
    }
  }, [prices, setTotalPrice, handleDefaultPrices]);

  // const baggageIDToPrice = (baggageID: number) => {
  //   const selectedBaggage = baggageData?.find(
  //     (baggage) => baggage.baggageId === baggageID,
  //   );
  //   return selectedBaggage?.baggagePricing[0].price;
  // };

  const calculateTotalPrice = (passengerIndex: number, mealID: number) => {
    const selectedMeal = mealData?.find((meal) => meal.mealId === mealID);
    const price = selectedMeal?.mealPricing[0].price;
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
                meal: selectedMeal,
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
                meal: selectedMeal,
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
      {/* <div className="flex items-center gap-2 py-2">
        <IoBagAdd className="text-2xl text-blue-900" />
        <p className="text-heading-3 text-blue-900">Mua thêm hành lý ký gửi</p>
      </div> */}

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
                options={mealOptionsFormatted}
                defaultValue={handleDefaultBaggage(passenger)}
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

export default AddMeal;
