import { FormProvider, useForm } from "react-hook-form";
import { IUser } from "../../interfaces";
import Input from "../../common/Input";
import Radio from "../../common/Radio";

const RegisterForm: React.FC = () => {
  const methods = useForm<IUser>();
  const genderOptions = [
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" },
  ];

  function onSubmit(data: IUser): void {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <div className="max-lg:space-y-6 lg:flex lg:gap-10">
          <div className="flex-1">
            <Input
              type="text"
              name="lastName"
              label="Họ"
              placeholder="Họ, ví dụ PHAM"
            />
          </div>
          <div className="flex-1">
            <Input
              type="text"
              name="firstName"
              label="Tên đệm & tên"
              placeholder="Tên đệm & tên, ví dụ VAN A"
            />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex-1">
            <Input type="date" name="dob" label="Ngày sinh" />
          </div>

          <div className="flex-1">
            <label htmlFor="gender" className="label">
              Giới tính
            </label>
            <div className="mt-3 flex gap-4">
              <Radio name="gender" options={genderOptions} />
            </div>
          </div>

          {/* <div className="flex-1">
            <label htmlFor="country" className="label">
              Quốc gia
            </label>
            <select name="country" className="select">
              <option value="vietnam">Việt Nam</option>
              <option value="japan">Nhật Bản</option>
              <option value="korea">Hàn Quốc</option>
              <option value="usa">Mỹ</option>
              <option value="other">Khác</option>
            </select>
          </div> */}
        </div>

        <div className="max-lg:space-y-6 lg:flex lg:gap-10">
          <div className="flex-1">
            <Input
              type="text"
              name="phoneNumber"
              label="Số điện thoại"
              placeholder="Số điện thoại"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="country" className="label">
              Quốc gia
            </label>
            <select
              name="country"
              className="w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow placeholder:text-sm hover:border-blue-300 focus:shadow-gray-500 focus:outline-none"
            >
              <option value="vietnam">Việt Nam</option>
              <option value="japan">Nhật Bản</option>
              <option value="korea">Hàn Quốc</option>
              <option value="usa">Mỹ</option>
              <option value="other">Khác</option>
            </select>
            {/* <div>
          <label htmlFor="country" className="label">
            Quốc gia
          </label>
          <select name="country" className="select">
            <option value="vietnam">Việt Nam</option>
            <option value="japan">Nhật Bản</option>
            <option value="korea">Hàn Quốc</option>
            <option value="usa">Mỹ</option>
            <option value="other">Khác</option>
          </select>
        </div> */}
          </div>
        </div>

        <div>
          <label htmlFor="passportNumber" className="label">
            Hộ chiếu/CCCD
          </label>
          <Input
            type="text"
            name="passportNumber"
            placeholder="Hộ chiếu/CCCD"
          />
        </div>

        <div className="flex-auto">
          <Input type="email" name="email" label="Email" placeholder="Email" />
        </div>

        <div className="max-lg:space-y-6 lg:flex lg:gap-10">
          <div className="flex-1">
            <Input
              type="password"
              name="password"
              label="Mật khẩu"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="flex-1">
            <Input
              type="password"
              name="confirmPassword"
              label="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
