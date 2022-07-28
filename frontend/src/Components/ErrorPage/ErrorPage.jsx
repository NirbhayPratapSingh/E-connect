import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="text-indigo-500 font-bold text-7xl">404</div>

      <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10 dark:text-gray-200">
        This page does not exist
      </div>

      <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
        The page you are looking for could not be found.
      </div>
    </div>
  );
};

export default ErrorPage;
