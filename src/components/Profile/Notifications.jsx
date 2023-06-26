import React from "react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

const Notifications = () => {
  return (
    <div className="p">
      <Sidebar />
      <div className="p_top scroll1">
        <TopHeader />
        <div className="back"></div>
      </div>
    </div>
  );
};

export default Notifications;
