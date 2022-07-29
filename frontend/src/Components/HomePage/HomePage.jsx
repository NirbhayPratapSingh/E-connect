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
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              learning with others is a manner of group learning that enhances
              communication skills, cultural awareness, thinking skills and so
              much more.
            </p>
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

    
    <section class="bg-white dark:bg-gray-900 w-[100%]">
            <div class="container px-6 py-10 mx-auto w-full"> 
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our <span class="text-blue-500">Users Review</span></h1>
                
                <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                E-connect is platform which provide wide range of people access to Interact with a large community here are some Users review
                </p>
                
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                    <div class="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">arthur melo</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Student</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">The beauty of E-connect is that anyone, anywhere with an internet connection can learn from the world’s experts.</p>
                        
                        
                    </div>

                    <div class="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Amelia. Anderson</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">IT Engineer</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"> It gives the opportunity to work in a team, which gives a real experience of the corporate world. This helps students too</p>

                        
                    </div>

                    <div class="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Olivia Wathan</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Student</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Being from a non-cs background to a Developer has been a tremendous journey and great support by E-connect</p>

                        
                    </div>

                    <div class="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">John Doe</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Engineer</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Even though I already had the passion to be a software developer all along, it was E-connect who provides me with the right framework and support. Due to my training at Masai I was able to crack the interview at Smallcase and get the job as Frontend Developer.</p>

                    </div>
                </div>
            </div>
        </section>
    </div>
   
  );
};

export default HomePage;
