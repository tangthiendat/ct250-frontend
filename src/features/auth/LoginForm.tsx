import { FormProvider, useForm } from "react-hook-form";
import { IAuthRequest } from "../../interfaces";
import Input from "../../common/Input";

const LoginForm: React.FC = () => {
  const methods = useForm<IAuthRequest>();

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
          />
        </div>

        <div>
          <Input
            type="password"
            name="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
          />
        </div>

        <div>
          <button
            type="submit"
            className="focus:shadow-outline w-full rounded bg-blue-700 py-2 font-bold text-white hover:bg-blue-900 focus:outline-none"
          >
            Đăng nhập
          </button>
        </div>
        <div className="text-center text-xs">
          <a
            href="#"
            className="text-sm font-semibold text-black hover:text-blue-900"
          >
            Quên mật khẩu?
          </a>
        </div>
        <div className="text-center text-xs">
          <span className="text-sm text-gray-900">Chưa có tài khoản? </span>
          <a
            href="../register"
            className="text-sm font-semibold text-black hover:text-blue-900"
          >
            Đăng ký ngay
          </a>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
