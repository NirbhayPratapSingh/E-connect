import React from "react";

const rooms = ["general", "random", "jokes", "javascript"];

const MyChat = (props) => {
  const renderRooms = (room) => {
    const currentChat = {
      chatName: room,
      isChannel: true,
      receiverId: "",
    };

    return (
      // Row
      <div onClick={() => props.toggleChat(currentChat)} key={room}>
        {room}
      </div>
    );
  };

  const renderUser = (user) => {
    if (user.id === props.yourId) {
      return (
        // Row
        <div key={user.id}>You: {user.username}</div>
      );
    }
    const currentChat = {
      chatName: user.username,
      isChannel: false,
      receiverId: user.id,
    };

    return (
      // Row
      <div onClick={() => props.toggleChat(currentChat)} key={user.username}>
        {user.username}
      </div>
    );
  };

  const renderMessages = (message, index) => {
    return (
      <div key={index}>
        <h3>{message.sender}</h3>
        <p>{message.content}</p>
      </div>
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.sendMessage();
    }
  };

  console.log(props.allUsers);

  return (
    <div className="w-full flex h-[55vh] text-white justify-center">
      {/* SideBar */}
      <div className="w-1/5 p-5">
        <h3 className="text-gray-700 uppercase dark:text-white underline">
          Channels
        </h3>
        {rooms.map(renderRooms)}
        <h3>All Users</h3>
        {props.allUsers.map(renderUser)}
      </div>

      {/* ChatPenel */}
      <div className="w-full">
        {/* ChannelInfo */}
        <div className="text-center">{props.currentChat.chatName}</div>
        {/* BodyContainer */}
        <div>
          {!props.currentChat.isChannel ||
          props.connectedRooms.includes(props.currentChat.chatName) ? (
            <div>{props.messages.map(renderMessages)}</div>
          ) : (
            <button onClick={() => props.joinRoom(props.currentChat.chatName)}>
              Join {props.currentChat.chatName}
            </button>
          )}
        </div>
        {/* TextBox */}
        <textarea
          className="text-black"
          value={props.message}
          onChange={props.handleMessageChange}
          onKeyPress={handleKeyPress}
          placeholder="Say something..."
        ></textarea>
      </div>
    </div>
  );
};

export default MyChat;
