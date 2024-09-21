import React from "react";
import RegisterForm from "../features/auth/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex min-h-full flex-1 flex-col justify-center p-2 transition-all duration-1000 sm:py-8 lg:px-8">
        <div className="flex items-center justify-between rounded-xl p-8 transition-all duration-1000 sm:bg-white lg:border lg:shadow-md">
          <div className="hidden w-1/2 lg:block">
            <img
              src="/pages/register/register_background.jpg"
              alt="Register background"
            />
          </div>

          <div className="mx-auto w-full rounded-xl border bg-slate-100 p-5 shadow transition-all duration-500 sm:w-[70%] md:w-[60%] lg:w-[50%]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Đăng ký
              </h2>
            </div>

            <div className="mt-10 transition-all duration-1000 sm:mx-auto sm:w-full sm:max-w-xl">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
