import React from "react";
import RegisterForm from "../features/auth/RegisterForm";
const Register: React.FC = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="bg-slate-100 p-8 border rounded-xl shadow-md w-1/2 mx-auto min-w-96">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Đăng ký
            </h2>
          </div>

          {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"></div> */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
