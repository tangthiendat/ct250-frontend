import LoginForm from "../features/auth/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex min-h-full flex-1 flex-col justify-center py-10 transition-all duration-1000 sm:py-8 lg:px-8">
        <div className="flex items-center justify-between rounded-xl transition-all duration-1000 sm:bg-white lg:border lg:shadow-md">
          <div className="mx-auto w-[80%] min-w-60 rounded-xl border bg-slate-100 p-5 shadow transition-all duration-500 sm:w-[50%] md:w-[40%] xl:w-[30%]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Đăng nhập
              </h2>
            </div>

            <div className="mt-10 transition-all duration-1000 sm:mx-auto sm:w-full sm:max-w-xl">
              <LoginForm />
            </div>
          </div>

          <div className="hidden w-1/2 lg:block">
            <img
              src="/pages/login/login_background.jpg"
              alt="Login background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
