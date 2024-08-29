import { FormProvider, useForm } from "react-hook-form";
import { IAuthRequest } from "../../interfaces";
import Input from "../../common/Input";

const LoginForm: React.FC = () => {
  const methods = useForm<IAuthRequest>({
    mode: "onChange",
  });
  const { formState } = methods;

  function onLogin(data: IAuthRequest): void {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onLogin)} className="space-y-5">
        <div>
          <Input
            type="text"
            name="email"
            label="Email"
            placeholder="Nhập email của bạn"
            validation={{
              required: "Email không được để trống",
            }}
          />
        </div>

        <div>
          <Input
            type="password"
            name="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            validation={{
              required: "Mật khẩu không được để trống",
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            className={`focus:shadow-outline mt-2 w-full rounded py-2 font-bold text-white focus:outline-none ${!formState.isValid ? "bg-blue-300" : "bg-blue-700 hover:bg-blue-900"}`}
            disabled={!formState.isValid}
          >
            Đăng nhập
          </button>
        </div>
        <div className="text-center text-xs">
          <a
            href="#"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Quên mật khẩu?
          </a>
        </div>
        <div className="text-center text-xs">
          <span className="text-sm text-gray-900">Chưa có tài khoản? </span>
          <a
            href="../register"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Đăng ký ngay
          </a>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
