import React from "react";
import emranImage from "../assets/emran1.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid place-items-center h-screen w-full bg-[#ffffff]">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-300 py-8 rounded-md shadow-lg">
        <div className="max-w-full w-full space-y-8">
          <div>
            <img
              src={emranImage}
              alt="emran's image"
              className="mx-auto h-16 w-auto rounded-full object-cover"
            />
            <h1 className="mt-6 space-y-6 text-3xl font-semibold text-gray-900">
              Sign in to your account
            </h1>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md bg-gray-400 shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  placeholder="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link
                  to="/register"
                  className="font-medium text-violet-600 hover:text-violet-500"
                >
                  Register
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full  flex justify-center bg-violet-600 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
