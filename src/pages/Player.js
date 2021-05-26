import React from "react";
import "./Player.css";

import Sidebar from "../components/Sidebar/Sidebar";
import Body from "../components/body/Body";
import Footer from "../components/Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
