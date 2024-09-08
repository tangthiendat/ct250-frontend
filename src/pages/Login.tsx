import LoginForm from "../features/auth/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {/* mx-auto w-1/2 min-w-96  */}
        <div className="flex items-center justify-between rounded-xl bg-white p-8 lg:border lg:shadow-md">
          <div className="mx-auto min-w-96 rounded-xl border bg-slate-100 p-5 shadow lg:w-1/2">
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
