import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message timestamp="1/23/2021" message="Hey" user="John" />
      </div>
      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input type="text" placeholder="Message #TestChannel" />
          <button type="submit" className="chat__inputButton">
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
