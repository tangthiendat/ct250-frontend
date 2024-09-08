import LoginForm from "../features/auth/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex min-h-full flex-1 flex-col justify-center p-2 sm:py-8 lg:px-8">
        {/* mx-auto w-1/2 min-w-96  */}
        <div className="flex items-center justify-between rounded-xl p-8 sm:bg-white lg:border lg:shadow-md">
          <div className="mx-auto w-[80%] rounded-xl border bg-slate-100 p-5 shadow md:w-[60%] lg:w-[40%] xl:w-[30%]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Đăng nhập
              </h2>
            </div>

            {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"></div> */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
              <LoginForm />
            </div>
          </div>

          <div className="hidden w-1/2 lg:block">
            <img src="/login_background.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
