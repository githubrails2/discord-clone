import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
const Message = ({ timestamp, message, user }) => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          {user} <span className="message__timestamp">{timestamp}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
