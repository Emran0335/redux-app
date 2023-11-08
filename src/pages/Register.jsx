import React, { useEffect, useState } from "react";
import emranImage from "../assets/emran1.jpg";
import Error from "../components/ui/Error";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  // for ui
  const [error, setError] = useState("");
  // register mutation call
  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();
  // navigation
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Please enter the actual password!");
    } else {
      register({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
    }
  };
  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate("/inbox");
    }
  }, [data, navigate, responseError]);
  return (
    <div className="grid place-items-center h-screen w-full bg-[#ffffff]">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-300 py-8 rounded-md shadow-lg">
        <div className="max-w-full w-full space-y-8">
          <div>
            <Link to="/">
              <img
                src={emranImage}
                alt="emran's image"
                className="mx-auto h-16 w-auto rounded-full object-cover"
              />
            </Link>
            <h1 className="mt-6 space-y-6 text-3xl font-semibold text-gray-900">
              Create your account
            </h1>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md bg-gray-400 shadow-sm -space-y-px">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                />
              </div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  email
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                  placeholder="confirm password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreed"
                  id="agreed"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Agreed with the terms and condition
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full  flex justify-center bg-violet-600 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Sign up
              </button>
            </div>
            {error !== "" && <Error message={error} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
