import React, { useState, useRef, useEffect, useContext } from "react";
import io from "socket.io-client";
import immer from "immer";
import MyChat from "../MyChat/MyChat";
import Form from "../Form/Form";
import Chat from "../Chat/Chat";
import { AuthContext } from "../../contextApi/AuthContext";

const initialMessageState = {
  general: [],
  random: [],
  DSA: [],
  MEMES: [],
  Coding: [],
};

const Main = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const [currentChat, setCurrentChat] = useState({
    isChannel: true,
    chatName: "general",
    receiverId: "",
  });
  const [connectedRooms, setConnectedRooms] = useState(["general"]);
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState(initialMessageState);
  const [message, setMessage] = useState("");
  const socketRef = useRef();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    setMessage("");
  }, [messages]);

  const sendMessage = () => {
    const payload = {
      content: message,
      to: currentChat.isChannel ? currentChat.chatName : currentChat.receiverId,
      sender: username,
      chatName: currentChat.chatName,
      isChannel: currentChat.isChannel,
    };

    socketRef.current.emit("send message", payload);

    const newMessages = immer(messages, (draft) => {
      draft[currentChat.chatName].push({
        sender: username,
        content: message,
        id: currentChat.isChannel
          ? currentChat.chatName
          : currentChat.receiverId,
      });
    });

    setMessages(newMessages);
  };

  const roomJoinCallback = (imcomingMessages, room) => {
    const newMessages = immer(messages, (draft) => {
      draft[room] = imcomingMessages;
    });
    setMessages(newMessages);
  };

  const joinRoom = (room) => {
    const newConnectedRooms = immer(connectedRooms, (draft) => {
      draft.push(room);
    });

    socketRef.current.emit("join room", room, (messages) =>
      roomJoinCallback(messages, room)
    );

    setConnectedRooms(newConnectedRooms);
  };

  const toggleChat = (currentChat) => {
    if (!messages[currentChat.chatName]) {
      const newMessages = immer(messages, (draft) => {
        draft[currentChat.chatName] = [];
      });
      setMessages(newMessages);
    }
    setCurrentChat(currentChat);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const connect = () => {
    setConnected(true);
    socketRef.current = io.connect("/");
    socketRef.current.emit("join server", username);
    socketRef.current.emit("join room", "general", (messages) =>
      roomJoinCallback(messages, "general")
    );
    socketRef.current.on("new user", (allUsers) => {
      setAllUsers(allUsers);
    });
    socketRef.current.on("new message", ({ content, sender, chatName, id }) => {
      setMessages((messages) => {
        const newMessages = immer(messages, (draft) => {
          if (draft[chatName]) {
            draft[chatName].push({ content, sender, id });
          } else {
            draft[chatName] = [{ content, sender, id }];
          }
        });
        return newMessages;
      });
    });
  };

  useEffect(() => {
    if (login.username) {
      setUsername(login.username);
      connect();
    }
    return;
  }, [login]);

  return (
    <div>
      {/* {connected ? ( */}
      <>
        <Chat
          message={message}
          handleMessageChange={handleMessageChange}
          sendMessage={sendMessage}
          yourId={socketRef.current ? socketRef.current.id : ""}
          allUsers={allUsers}
          joinRoom={joinRoom}
          connectedRooms={connectedRooms}
          currentChat={currentChat}
          toggleChat={toggleChat}
          messages={messages[currentChat.chatName]}
          username={username}
        />
      </>
      {/* ) : (
        <Form username={username} onChange={handleChange} connect={connect} />
      )} */}
    </div>
  );
};

export default Main;
