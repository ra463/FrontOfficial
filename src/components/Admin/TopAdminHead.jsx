import React from "react";
import { MdNotifications, MdOutlineDashboard, MdSearch } from "react-icons/md";
import { useSelector } from "react-redux";
import { AiOutlineMessage } from "react-icons/ai";

const TopAdminHead = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="top_dash">
      <div className="head">
        <MdOutlineDashboard />
        <h2>Dashboard</h2>
      </div>
      <div className="search">
        <MdSearch />
        <input type="text" placeholder="Search Here..." />
      </div>
      <div className="user">
        <div className="icons">
          <AiOutlineMessage />
        </div>
        <div className="icons">
          <MdNotifications />
        </div>
        <div className="container">
          <img src={user?.avatar.url} alt="" />
          <p>
            Hi <span>{user?.firstname}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopAdminHead;
