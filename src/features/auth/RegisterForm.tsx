import { FormProvider, useForm } from "react-hook-form";
import { IUser } from "../../interfaces";
import Input from "../../common/Input";
import Radio from "../../common/Radio";
import Select from "../../common/Select";

const countryOptions = [
  { value: "vietnam", label: "Việt Nam" },
  { value: "japan", label: "Nhật Bản" },
  { value: "korea", label: "Hàn Quốc" },
  { value: "usa", label: "Mỹ" },
  { value: "other", label: "Khác" },
];

const genderOptions = [
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
];

const RegisterForm: React.FC = () => {
  const methods = useForm<IUser>({
    mode: "onChange",
  });
  // const { formState } = methods;

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
              style={{ textTransform: "uppercase" }}
              validation={{
                required: "Vui lòng nhập họ",
                pattern: {
                  value:
                    /^[a-záàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịúùủũụưứừửữựýỳỷỹỵđA-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÍÌỈĨỊÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ\s]+$/,
                  message: "Họ không chứa ký tự đặc biệt",
                },
                maxLength: {
                  value: 30,
                  message: 'Chú ý nhập "Họ" đúng với thông tin trên CCCD',
                },
              }}
            />
          </div>
          <div className="flex-1">
            <Input
              type="text"
              name="firstName"
              label="Tên đệm & tên"
              placeholder="Tên đệm & tên, ví dụ VAN A"
              style={{ textTransform: "uppercase" }}
              validation={{
                required: "Vui lòng nhập tên",
                pattern: {
                  value:
                    /^[a-záàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịúùủũụưứừửữựýỳỷỹỵđA-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÍÌỈĨỊÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ\s]+$/,
                  message: "Tên không chứa ký tự đặc biệt",
                },
                maxLength: {
                  value: 30,
                  message:
                    'Chú ý nhập "Tên đệm & tên " đúng với thông tin trên CCCD',
                },
              }}
            />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex-1">
            <Input
              type="date"
              name="dob"
              label="Ngày sinh"
              validation={{
                required: "Vui lòng nhập ngày sinh",
                max: {
                  value: new Date().toISOString().split("T")[0],
                  message: "Ngày sinh không hợp lệ",
                },
              }}
            />
          </div>

          <div className="flex-1">
            <Radio
              label="Giới tính"
              options={genderOptions}
              name="gender"
              validation={{
                required: "Vui lòng chọn giới tính",
              }}
            />
          </div>
        </div>

        <div className="max-lg:space-y-6 lg:flex lg:gap-10">
          <div className="flex-1">
            <Input
              type="text"
              name="phoneNumber"
              label="Số điện thoại"
              placeholder="Số điện thoại"
              validation={{
                required: "Vui lòng nhập số điện thoại",
                pattern: {
                  value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                  message: "Số điện thoại không hợp lệ",
                },
              }}
            />
          </div>
          <div className="flex-1">
            <Select options={countryOptions} name="country" label="Quốc gia" />
          </div>
        </div>

        <div>
          <Input
            type="text"
            name="passportNumber"
            label="Hộ chiếu/CCCD"
            placeholder="Hộ chiếu/CCCD"
            validation={{
              required: "Vui lòng nhập số hộ chiếu/CCCD",
              pattern: {
                value: /^[0-9]{9,12}$/,
                message: "Số hộ chiếu/CCCD không hợp lệ",
              },
            }}
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            validation={{
              required: "Vui lòng nhập email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email không hợp lệ",
              },
            }}
          />
        </div>

        <div className="max-lg:space-y-6 lg:flex lg:gap-10">
          <div className="flex-1">
            <Input
              name="password"
              label="Mật khẩu"
              placeholder="Mật khẩu"
              validation={{
                required: "Vui lòng nhập mật khẩu",
                minLength: {
                  value: 6,
                  message: "Mật khẩu phải chứa ít nhất 6 ký tự",
                },
              }}
            />
          </div>
          <div className="flex-1">
            <Input
              name="confirmPassword"
              label="Xác nhận mật khẩu"
              placeholder="Xác nhận mật khẩu"
              validation={{
                required: "Vui lòng xác nhận mật khẩu",
                validate: (value: string) =>
                  value === methods.getValues("password") ||
                  "Mật khẩu không trùng khớp",
              }}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="focus:shadow-outline mt-2 w-full rounded bg-blue-700 py-2 font-bold text-white hover:bg-blue-900 focus:outline-none"
            // className={`focus:shadow-outline mt-2 w-full rounded py-2 font-bold text-white focus:outline-none ${!formState.isValid ? "bg-blue-300" : "bg-blue-700 hover:bg-blue-900"}`}
            // disabled={!formState.isValid}
          >
            Đăng ký
          </button>
        </div>

        <div className="text-center text-xs">
          <span className="text-sm text-gray-900">
            Bạn đã có tài khoản? Quay lại{" "}
          </span>
          <a
            href="../login"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            đăng nhập
          </a>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
