import { DatePicker, DatePickerProps, Input, Select, Tooltip } from "antd";
import { Form } from "antd/lib";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import {
  IPassengerData,
  PassengerTitle,
  PassengerType,
} from "../../../../interfaces";
import usePassengersData from "../hooks/usePassengersData";

const TravelerInfoForm: React.FC = () => {
  const [form] = Form.useForm<IPassengerData>();
  const { inputtingTravelerType } = usePassengersData();
  const [mode, setMode] = useState<DatePickerProps["mode"]>("year");

  const customTitleSelectOptions = (inputtingTravelerType: string) => {
    if (inputtingTravelerType === PassengerType.ADULT) {
      return [
        { label: PassengerTitle.MR, value: "Mr" },
        { label: PassengerTitle.MRS, value: "Mrs" },
        { label: PassengerTitle.MS, value: "Ms" },
      ];
    } else {
      return [
        { label: PassengerTitle.MSTR, value: "Mstr" },
        { label: PassengerTitle.MISS, value: "Miss" },
      ];
    }
  };

  const handleModeChange = (value: Dayjs, newMode: DatePickerProps["mode"]) => {
    if (newMode === "date") {
      setMode("date");
      console.log("date");
    } else if (newMode === "month") {
      setMode("month");
      console.log("month");
    } else if (newMode === "year") {
      setMode("year");
      console.log("year");
    }
  };

  const handleDateChange = (
    value: Dayjs | null,
    dateString: string | string[],
  ) => {
    if (!dateString || form.getFieldValue("dateOfBirth") === undefined) {
      setMode("year");
    }
  };

  const handleDisabledDate = (
    currentDate: Dayjs,
    inputtingTravelerType: PassengerType,
  ) => {
    if (inputtingTravelerType === PassengerType.ADULT) {
      return currentDate.isAfter(dayjs().subtract(12, "year"));
    } else if (inputtingTravelerType === PassengerType.CHILD) {
      return (
        currentDate.isAfter(dayjs().subtract(2, "year")) ||
        currentDate.isBefore(dayjs().subtract(12, "year"))
      );
    } else if (inputtingTravelerType === PassengerType.INFANT) {
      return (
        currentDate.isAfter(dayjs()) ||
        currentDate.isBefore(dayjs().subtract(2, "year"))
      );
    }
    return false;
  };

  // const handleDefaultDate = (inputtingTravelerType: PassengerType) => {
  //   if (inputtingTravelerType === PassengerType.ADULT) {
  //     return dayjs().subtract(12, "year");
  //   } else if (inputtingTravelerType === PassengerType.CHILD) {
  //     return dayjs().subtract(2, "year");
  //   } else if (inputtingTravelerType === PassengerType.INFANT) {
  //     return dayjs().subtract(1, "year");
  //   }
  // };

  return (
    <>
      <Form.Item
        className="w-full flex-1"
        label={<p className="text-heading-3 text-blue-800">Danh xưng</p>}
        name="title"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn danh xưng",
          },
        ]}
      >
        <Select
          size="large"
          className="w-full"
          placeholder="Vui lòng chọn danh xưng"
          options={customTitleSelectOptions(inputtingTravelerType)}
        />
      </Form.Item>

      <Form.Item
        className="flex-1"
        label={
          <p className="text-heading-3 text-blue-800">
            Tên đệm & tên (ví dụ: VAN A)
          </p>
        }
        name="firstName"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên đệm & tên",
          },
        ]}
      >
        <Input
          size="large"
          className="uppercase"
          placeholder=" Vui lòng nhập tên đệm & tên"
        />
      </Form.Item>

      <Form.Item
        className="flex-1"
        label={
          <p className="text-heading-3 text-blue-800">Họ (ví dụ: NGUYEN)</p>
        }
        name="lastName"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập họ",
          },
        ]}
      >
        <Input
          size="large"
          className="uppercase"
          placeholder="Vui lòng nhập họ"
        />
      </Form.Item>

      <Form.Item
        className="flex-1"
        label={
          inputtingTravelerType === PassengerType.ADULT ? (
            <Tooltip title="Người lớn: 12 tuổi trở lên">
              <div className="flex items-center gap-4">
                <p className="text-heading-3 text-blue-800">Ngày sinh</p>
                <p className="title-4">
                  (*vui lòng nhập ngày sinh từ{" "}
                  {dayjs().subtract(12, "year").format("DD/MM/YYYY")} trở về
                  trước)
                </p>
              </div>
            </Tooltip>
          ) : inputtingTravelerType === PassengerType.CHILD ? (
            <Tooltip title="Trẻ em: từ 2 đến 12 tuổi">
              <div className="flex items-center gap-4">
                <p className="text-heading-3 text-blue-800">Ngày sinh</p>
                <p className="title-4">
                  (*vui lòng nhập ngày sinh từ{" "}
                  {dayjs().subtract(12, "year").format("DD/MM/YYYY")} đến{" "}
                  {dayjs().subtract(2, "year").format("DD/MM/YYYY")})
                </p>
              </div>
            </Tooltip>
          ) : (
            <Tooltip title="Trẻ sơ sinh: dưới 2 tuổi">
              <div className="flex items-center gap-4">
                <p className="text-heading-3 text-blue-800">Ngày sinh</p>
                <p className="title-4">
                  (*vui lòng nhập ngày sinh từ{" "}
                  {dayjs().subtract(2, "year").format("DD/MM/YYYY")} đến{" "}
                  {dayjs().format("DD/MM/YYYY")})
                </p>
              </div>
            </Tooltip>
          )
        }
        name="dateOfBirth"
        rules={[
          {
            required: true,
            message: "Ngày sinh không hợp lệ",
          },
        ]}
      >
        <DatePicker
          size="large"
          mode={mode}
          onPanelChange={handleModeChange}
          onChange={handleDateChange}
          className="w-full"
          format="DD/MM/YYYY"
          disabledDate={(currentDate) =>
            handleDisabledDate(currentDate, inputtingTravelerType)
          }
          placeholder="dd/mm/yyyy"
        />
      </Form.Item>
    </>
  );
};

export default TravelerInfoForm;
