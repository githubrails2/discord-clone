import React from "react";
import "./SidebarChannel.css";
const SidebarChannel = ({channel,id}) => {
    return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel}  
      </h4>
      
    </div>
  );
};

export default SidebarChannel;
