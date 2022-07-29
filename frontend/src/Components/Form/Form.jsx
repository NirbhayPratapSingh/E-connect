import React from "react";

const Form = (props) => {
  return (
    <form>
      <div className="mx-10 h-[60vh] flex justify-center items-center flex-col gap-4">
        <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-4xl">
          Welcome
        </h1>
        <p className="text-center mt-2 text-gray-600 dark:text-gray-400">
          Please Enter your Username and Connect with Other People Just like
          you.
        </p>

        <div className="min-w-full md:min-w-[50%] lg:min-w-[30%]">
          <label
            htmlFor="username"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="@example125"
            value={props.username}
            onChange={props.onChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6 min-w-full md:min-w-[29%] lg:min-w-[19%]">
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            onClick={props.connect}
          >
            Connect
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
