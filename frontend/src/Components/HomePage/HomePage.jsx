import React from "react";

const HomePage = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
              Best Place To Find Your Learning Partner
            </h1>
            <p className="mt-2 mb-5 text-gray-600 dark:text-gray-400">
              learning with others is a manner of group learning that enhances
              communication skills, cultural awareness, thinking skills and so
              much more.
            </p>
            <a
              href="/chat"
              className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Chat Now
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <video
            autoPlay
            loop
            muted
            poster="https://lh3.googleusercontent.com/EdrznbVa_EV1flSpEnA__oab0QpVW9h15iWP1BLOvVdwZ1ySw6JCQzYiu4eZA9f_FBHlIRsoURu5kjdOWhdunV0Ep7FIjc5QhPNc9Q=w1180-e365-rw-lo-l100"
          >
            <source
              type="video/webm"
              src="https://storage.googleapis.com/gweb-aiaz.appspot.com/animations/Masthead.webm"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
