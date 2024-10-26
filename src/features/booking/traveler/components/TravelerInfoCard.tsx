import { ConfigProvider, Form } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { IPassengerData, PassengerType } from "../../../../interfaces";
import {
  addPassengerInfo,
  setCurrentAdultIndex,
  setCurrentChildIndex,
  setCurrentInfantIndex,
  setInputtingTravelerType,
  setPassengerInfo,
} from "../../../../redux/slices/passengersSlice";
import { formatISODate } from "../../../../utils";
import usePassengersData from "../hooks/usePassengersData";
import Buttons from "./Buttons";
import TravelerInfoForm from "./TravelerInfoForm";

const TravelerInfoCard: React.FC = () => {
  const [form] = Form.useForm<IPassengerData>();
  const {
    travelerIndex,
    passengers,
    numOfAdult,
    numOfChild,
    numOfInfant,
    totalPassenger,
    currentAdultIndex,
    currentChildIndex,
    currentInfantIndex,
    navigate,
    dispatch,
  } = usePassengersData();
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split("/");

  useEffect(() => {
    if (passengers.passengersInfo[travelerIndex]) {
      form.setFieldsValue({
        ...passengers.passengersInfo[travelerIndex],
        dateOfBirth: dayjs(
          passengers.passengersInfo[travelerIndex].dateOfBirth,
        ),
      });
    }
  }, [travelerIndex, form, passengers.passengersInfo]);

  const handleNextButtonClick = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      const formattedValues = {
        ...values,
        isEditing: false,
        passengerType: passengers.inputtingTravelerType,
        passengerTitle: values.passengerTitle,
        dateOfBirth: formatISODate(values.dateOfBirth.toString()),
        firstName: values.firstName.toUpperCase(),
        lastName: values.lastName.toUpperCase(),
      };

      if (passengers.passengersInfo[travelerIndex] !== undefined) {
        dispatch(
          setPassengerInfo({
            index: travelerIndex,
            passengerInfo: formattedValues,
          }),
        );
      } else {
        dispatch(addPassengerInfo(formattedValues));
      }

      form.resetFields();

      // logic for handling next button click
      if (currentAdultIndex === numOfAdult - 1) {
        if (numOfChild > 0) {
          dispatch(setInputtingTravelerType(PassengerType.CHILD));
        } else if (numOfInfant > 0) {
          dispatch(setInputtingTravelerType(PassengerType.INFANT));
        }
      } else if (
        currentAdultIndex === numOfAdult &&
        currentChildIndex === numOfChild - 1
      ) {
        if (numOfInfant > 0) {
          dispatch(setInputtingTravelerType(PassengerType.INFANT));
        }
      }

      if (currentAdultIndex < numOfAdult) {
        dispatch(setCurrentAdultIndex(currentAdultIndex + 1));
      } else if (currentChildIndex < numOfChild) {
        dispatch(setCurrentChildIndex(currentChildIndex + 1));
      } else if (currentInfantIndex < numOfInfant) {
        dispatch(setCurrentInfantIndex(currentInfantIndex + 1));
      }

      if (
        passengers.passengersInfo[travelerIndex]?.isEditing ||
        travelerIndex === totalPassenger - 1
      ) {
        dispatch(setInputtingTravelerType(PassengerType.ADULT));
        dispatch(setCurrentAdultIndex(0));
        dispatch(setCurrentChildIndex(0));
        dispatch(setCurrentInfantIndex(0));

        navigate("/book/shopping-cart");
      } else if (travelerIndex < totalPassenger - 1) {
        pathParts[pathParts.length - 1] = `${travelerIndex + 1}`;
        navigate(pathParts.join("/"));
      }
      // end of logic for handling next button click
    } catch {
      console.log("Form validation failed");
    }
  };

  const handlePreviousButtonClick = () => {
    if (currentInfantIndex - 1 < 0) {
      if (currentChildIndex > 0) {
        dispatch(setInputtingTravelerType(PassengerType.CHILD));
      } else if (currentAdultIndex > 0) {
        dispatch(setInputtingTravelerType(PassengerType.ADULT));
      }
    } else if (currentChildIndex - 1 === 0) {
      if (currentAdultIndex > 0) {
        dispatch(setInputtingTravelerType(PassengerType.ADULT));
      }
    }

    if (currentInfantIndex > 0) {
      dispatch(setCurrentInfantIndex(currentInfantIndex - 1));
    } else if (currentChildIndex > 0) {
      dispatch(setCurrentChildIndex(currentChildIndex - 1));
    } else if (currentAdultIndex > 0) {
      dispatch(setCurrentAdultIndex(currentAdultIndex - 1));
    }

    if (travelerIndex > 0) {
      pathParts[pathParts.length - 1] = `${travelerIndex - 1}`;
      navigate(pathParts.join("/"));
    }
  };

  return (
    <div className="mx-auto mt-5 max-w-screen-md px-2 transition-all duration-1000 xl:max-w-screen-lg">
      <div className="rounded-lg bg-slate-100 px-20 py-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
        <p className="text-heading-3 mb-4 text-center text-blue-900">
          {passengers.passengersInfo[travelerIndex]?.isEditing
            ? "Chỉnh sửa thông tin"
            : "Thông tin cá nhân"}
        </p>

        <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBorderColor: "#1e40af",
                hoverBorderColor: "#1e40af",
              },
              Select: {
                colorPrimary: "#1e40af",
                colorPrimaryHover: "#1e40af",
              },
              DatePicker: {
                activeBorderColor: "#1e40af",
                hoverBorderColor: "#1e40af",
              },
            },

            token: {
              lineWidth: 2,
            },
          }}
        >
          <Form
            className="g-blue-800 flex flex-col"
            layout="vertical"
            // onFinish={onFinish}
            form={form}
            id="form"
          >
            <TravelerInfoForm />
          </Form>
        </ConfigProvider>
      </div>

      <Buttons
        isEditing={passengers.passengersInfo[travelerIndex]?.isEditing}
        handleNextButtonClick={handleNextButtonClick}
        handlePreviousButtonClick={handlePreviousButtonClick}
      />
    </div>
  );
};

export default TravelerInfoCard;
