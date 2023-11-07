import React from "react";

const Model = ({ open, control }) => {
  return (
    <>
      {open && (
        <>
          <div className="w-full h-full inset-0 z-10 bg-black/50 cursor-pointer">
            f
          </div>
          <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"></h2>
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="to" className="sr-only">
                    To
                  </label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    required
                    placeholder="Send"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="messge"
                    id="message"
                    type="message"
                    required
                    placeholder="message"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-violet-600 text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Model;
