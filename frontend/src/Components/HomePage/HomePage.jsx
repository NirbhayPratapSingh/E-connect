import React from 'react'

const HomePage = () => {
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
              Best Place To Find Your Learning Partner
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              learning with others is a manner of group learning that enhances
              communication skills, cultural awareness, thinking skills and so
              much more.
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
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
  )
}

export default HomePage
