const Login: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-slate-100 px-20 py-10 border rounded-xl shadow-md  mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-blue-300 focus:outline-none focus:shadow-gray-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-blue-300 focus:outline-none focus:shadow-gray-500"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <div className="text-xs text-center">
              <a
                href="#"
                className="font-semibold text-black hover:text-blue-900"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
