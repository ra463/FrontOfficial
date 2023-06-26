import React from "react";
import "./DashSidebar.scss";
import { CgMenuLeftAlt, CgNotes, CgSearchFound } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import {
  MdNotifications,
  MdOutlineDashboard,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const DashSidebar = ({ show, setShow }) => {
  const location = useLocation();
  return (
    <div className="dash_sidebar">
      {show === false && (
        <div className="dash_sidebar_top">
          <div className="top">
            <div className="logo">
              <img src="/favlogo.png" alt="" />
              <h1>FiNDER</h1>
            </div>
            <div className="menu" onClick={() => setShow(true)}>
              <CgMenuLeftAlt />
            </div>
          </div>
          <div className="bottom">
            <div
              className={
                location.pathname === "/admin/dashboard" ? "active" : ""
              }
            >
              <Link to="/admin/dashboard">
                <MdOutlineDashboard /> Dashboard
              </Link>
            </div>
            <div>
              <Link to="/">
                <FiHome /> Home
              </Link>
            </div>
            <div
              className={
                location.pathname === "/admin/allmissingreports" ? "active" : ""
              }
            >
              <Link to="/admin/allmissingreports">
                <MdOutlineReportGmailerrorred /> Missing Report's
              </Link>
            </div>
            <div
              className={
                location.pathname === "/admin/allfoundreports" ? "active" : ""
              }
            >
              <Link to="/admin/allfoundreports">
                <CgSearchFound /> Found Report's
              </Link>
            </div>
            <div
              className={
                location.pathname === "/admin/allreports" ? "active" : ""
              }
            >
              <Link to="/admin/allreports">
                <CgNotes /> All Report's
              </Link>
            </div>
            <div
              className={
                location.pathname === "/admin/allusers" ? "active" : ""
              }
            >
              <Link to="/admin/allusers">
                <FaUserFriends /> All User's
              </Link>
            </div>
            <div>
              <Link>
                <MdNotifications /> Notification's
              </Link>
            </div>
          </div>
        </div>
      )}
      {show === true && (
        <div className="dash_sidebar_top">
          <div className="top">
            <div
              className="menu"
              style={{
                margin: "0.47rem 0.5rem",
              }}
              onClick={() => setShow(false)}
            >
              <CgMenuLeftAlt />
            </div>
          </div>
          <div className="bottom">
            <div
              className={
                location.pathname === "/admin/dashboard" ? "active" : ""
              }
            >
              <Link to="/admin/dashboard">
                <MdOutlineDashboard />
              </Link>
            </div>
            <div>
              <Link to="/">
                <FiHome />
              </Link>
            </div>
            <div
              className={
                location.pathname === "/admin/allmissingreports" ? "active" : ""
              }
            >
              <Link to="/admin/allmissingreports">
                <MdOutlineReportGmailerrorred />
              </Link>
            </div>
            <div
              className={
                location.pathname === "/admin/allfoundreports" ? "active" : ""
              }
            >
              <Link to="/admin/allfoundreports">
                <CgSearchFound />
              </Link>
            </div>
            <div
              className={
                location.pathname === "/admin/allreports" ? "active" : ""
              }
            >
              <Link to="/admin/allreports">
                <CgNotes />
              </Link>
            </div>
            <div
              className={
                location.pathname === "/admin/allusers" ? "active" : ""
              }
            >
              <Link to="/admin/allusers">
                <FaUserFriends />
              </Link>
            </div>
            <div>
              <Link>
                <MdNotifications />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashSidebar;
