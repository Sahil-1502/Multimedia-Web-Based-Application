import React from "react";
import "./topbar.css";
import { Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">sahiladmin</span>
          <span className="logo">Netflix Admin Panel</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/netflix-cab40.appspot.com/o/items%2Fpexels-danielle-reese-2496451.jpg?alt=media&token=860d3cfa-75a6-4c78-b4c8-eaefa9fb33ce" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
