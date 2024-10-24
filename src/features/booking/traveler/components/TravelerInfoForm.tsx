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
import { useCountries } from "../../../countries/hooks";
import useSearchData from "../../available-flights/hooks/useSearchData";

const TravelerInfoForm: React.FC = () => {
  const [form] = Form.useForm<IPassengerData>();
  const { travelerIndex, inputtingTravelerType } = usePassengersData();
  const { flightSearch } = useSearchData();
  const departureDate = dayjs(flightSearch.flightRange[0]);
  const [mode, setMode] = useState<DatePickerProps["mode"]>("year");
  const { countries } = useCountries();
  const countryOptions = countries?.map((country) => ({
    label: country.countryName + " (+" + country.countryCode + ")",
    icon: country.countryCode,
    value: country.countryCode,
  }));

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
      return currentDate.isAfter(departureDate.subtract(12, "year"));
    } else if (inputtingTravelerType === PassengerType.CHILD) {
      return (
        currentDate.isAfter(departureDate.subtract(2, "year")) ||
        currentDate.isBefore(departureDate.subtract(12, "year"))
      );
    } else if (inputtingTravelerType === PassengerType.INFANT) {
      return (
        currentDate.isAfter(departureDate) ||
        currentDate.isBefore(departureDate.subtract(2, "year"))
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
        name="passengerTitle"
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
                  {departureDate.subtract(12, "year").format("DD/MM/YYYY")} trở
                  về trước)
                </p>
              </div>
            </Tooltip>
          ) : inputtingTravelerType === PassengerType.CHILD ? (
            <Tooltip title="Trẻ em: từ 2 đến 12 tuổi">
              <div className="flex items-center gap-4">
                <p className="text-heading-3 text-blue-800">Ngày sinh</p>
                <p className="title-4">
                  (*vui lòng nhập ngày sinh từ{" "}
                  {departureDate.subtract(12, "year").format("DD/MM/YYYY")} đến{" "}
                  {departureDate.subtract(2, "year").format("DD/MM/YYYY")})
                </p>
              </div>
            </Tooltip>
          ) : (
            <Tooltip title="Trẻ sơ sinh: dưới 2 tuổi">
              <div className="flex items-center gap-4">
                <p className="text-heading-3 text-blue-800">Ngày sinh</p>
                <p className="title-4">
                  (*vui lòng nhập ngày sinh từ{" "}
                  {departureDate.subtract(2, "year").format("DD/MM/YYYY")} đến{" "}
                  {departureDate.format("DD/MM/YYYY")})
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

      {travelerIndex === 0 && (
        <>
          <div className="flex flex-1 gap-5">
            <Form.Item
              className="min-w-[40%]"
              label={<p className="text-heading-3 text-blue-800">Quốc tịch</p>}
              name="country"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn quốc tịch",
                },
              ]}
            >
              <Select
                size="large"
                className="w-full"
                showSearch
                placeholder="Vui lòng chọn quốc tịch"
                options={countryOptions}
                // optionFilterProp="label"
                filterOption={(input, option) =>
                  option?.label.toLowerCase().includes(input.toLowerCase()) ??
                  false
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
              />
            </Form.Item>

            <Form.Item
              className="w-full max-w-[60%]"
              label={
                <p className="text-heading-3 text-blue-800">Số điện thoại</p>
              }
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại",
                },
                {
                  pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                  message: "Số điện thoại không hợp lệ",
                },
              ]}
            >
              <Input size="large" placeholder="Vui lòng nhập số điện thoại" />
            </Form.Item>
          </div>

          <Form.Item
            className="flex-1"
            label={<p className="text-heading-3 text-blue-800">Email</p>}
            name="email"
            rules={[
              {
                type: "email",
                message: "Email không hợp lệ",
              },
              {
                required: true,
                message: "Vui lòng nhập email",
              },
            ]}
          >
            <Input size="large" placeholder="Vui lòng nhập email" />
          </Form.Item>
        </>
      )}
    </>
  );
};

export default TravelerInfoForm;
