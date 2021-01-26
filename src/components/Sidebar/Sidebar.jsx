import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import {
  ExpandMore,
  Add,
  Call,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
  
} from "@material-ui/icons";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel/SidebarChannel";
import db, { auth } from "../../config/firebase";
import { selectUser } from "../../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);
  

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");
    if (channelName) {
      db.collection("channels").add({ channelName: channelName });
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Clever Programmer</h3>
        <ExpandMore />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMore />
            <h4>Text Channel</h4>
          </div>
          <Add className="sidebar__addChannel" onClick={handleAddChannel} />
        </div>
        <div className="sidebar__channelsList">
         {
           channels && 

           channels.map(channel => (
            
            
           <SidebarChannel key={channel.id} channel={channel.channel.channelName} id={channel.id}/>
           ))
         }
          
          
        </div>
      </div>
      {/**Sidebar Voice */}
      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcon" fontSize="large" />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>
      {/**End of Sidebar voice */}
      <div className="sidebar__profile">
        <Avatar src={user.photo} onClick={() => auth.signOut()} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
