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
        <div>
          <Input type="text" name="lastName" label="Họ" placeholder="Họ, ví dụ PHAM" />
        </div>
        <div>
          <Input
            type="text"
            name="firstName"
            label="Tên đệm & tên"
            placeholder="Tên đệm & tên, ví dụ VAN A"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="basis-[45%]">
            <Input type="date" name="dob" label="Ngày sinh" />
          </div>

          <div className="basis-[40%]">
            <label htmlFor="gender" className="label">
              Giới tính
            </label>
            <div className="flex justify-between gap-4">
              <Radio name="gender" options={genderOptions} />
            </div>
          </div>
        </div>

        <div>
          <Input type="text" label="Số điện thoại" name="phoneNumber" placeholder="Số điện thoại" />
        </div>

        <div>
          <Input type="email" label="Email" name="email" placeholder="Email" />
        </div>

        <div>
          <Input type="password" label="Mật khẩu" name="password" placeholder="Mật khẩu" />
        </div>

        <div>
          <Input
            type="password"
            label="Nhập lại mật khẩu"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
          />
        </div>

        <div>
          <label htmlFor="passportNumber" className="label">
            Hộ chiếu/CCCD
          </label>
          <Input type="text" name="passportNumber" placeholder="Hộ chiếu/CCCD" />
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Đăng ký
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
