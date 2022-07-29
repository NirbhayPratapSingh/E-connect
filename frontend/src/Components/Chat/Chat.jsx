import React from "react";
import styles from "./Chat.module.css";

const rooms = ["general", "random", "DSA", "MEMES", "Coding"];

const Chat = (props) => {
  const renderRooms = (room) => {
    const currentChat = {
      chatName: room,
      isChannel: true,
      receiverId: "",
    };

    return (
      // Row
      <div
        className="mt-2 cursor-pointer px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
        onClick={() => props.toggleChat(currentChat)}
        key={room}
      >
        {room}
      </div>
    );
  };

  const renderUser = (user, index) => {
    if (user.username === props.username) {
      return (
        // Row
        <div
          className="mt-2 cursor-pointer px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
          key={user.id}
        >
          You: {user.username}
        </div>
      );
    }
    const currentChat = {
      chatName: user.username,
      isChannel: false,
      receiverId: user.id,
    };

    return (
      // Row
      <div
        className="mt-2 cursor-pointer px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
        onClick={() => props.toggleChat(currentChat)}
        key={user.id}
      >
        {user.username}
      </div>
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.sendMessage();
    }
  };

  console.log(props.messages);
  return (
    <div className="flex flex-row lg:max-w-[50%] m-auto items-start">
      <div className="p-5 border-r-2 border-r-gray-600 min-h-screen">
        <h3 className="text-gray-700 uppercase dark:text-white text-xl">
          Channels
        </h3>
        {rooms.map(renderRooms)}
        <h3 className="mt-2 text-gray-700 uppercase dark:text-white text-xl">
          All Users
        </h3>
        {props.allUsers.map(renderUser)}
      </div>

      <div className="m-auto flex-1 p:2 sm:p-6 flex flex-col h-screen">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute text-green-500 right-[-8px] bottom-[-10px]">
                <svg width="20" height="20">
                  <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                </svg>
              </span>
              <div className="text-black dark:text-gray-300 text-5xl  w-14 h-14 rounded-full order-2 bg-black flex justify-center item-center">
                {props.currentChat.chatName[0].toUpperCase()}
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3 dark:text-gray-200">
                  {props.currentChat.chatName}
                </span>
              </div>
              <span className="text-lg text-gray-600 dark:text-gray-400">
                Hello there I am using E-connect.
              </span>
            </div>
          </div>
        </div>

        <div
          id={styles.messages}
          className="min-h-[65vh] flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {!props.currentChat.isChannel ||
          props.connectedRooms.includes(props.currentChat.chatName) ? (
            <>
              {props.messages.map((message, index) => {
                if (message.sender === props.username) {
                  return (
                    <div key={index} className="chat-message">
                      <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                          <div>
                            <span className="text-xl px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                              {message.content}
                            </span>
                          </div>
                        </div>
                        <div className="text-black dark:text-gray-200 w-6 h-6 rounded-full order-2 bg-black flex justify-center item-center">
                          {message.sender[0].toUpperCase()}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="chat-message" key={index}>
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span className="text-xl px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            {message.content}
                          </span>
                        </div>
                      </div>
                      <div className="text-black dark:text-gray-200 w-6 h-6 rounded-full order-2 bg-black flex justify-center item-center">
                        {message.sender[0].toUpperCase()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <button
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              onClick={() => props.joinRoom(props.currentChat.chatName)}
            >
              Join {props.currentChat.chatName}
            </button>
          )}
        </div>

        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <span className="absolute inset-y-0 flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              value={props.message}
              onChange={props.handleMessageChange}
              onKeyPress={handleKeyPress}
              placeholder="Say something..."
              className="block h-[50px] w-full px-12 py-2 items-center text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                onClick={() => props.sendMessage()}
                type="button"
                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
