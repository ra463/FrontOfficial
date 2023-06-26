import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TopHeader.scss";
import { AiOutlineBell } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import useClickOutside from "../../utils/ClickOutSide";
import toast from "react-hot-toast";
import { logout } from "../../redux/actions/userActions";

const TopHeader = () => {
  const { user } = useSelector((state) => state.user);
  const { error, message } = useSelector((state) => state.logout);

  const [show, setShow] = useState(false);
  const log = useRef(null);
  const dispatch = useDispatch();

  useClickOutside(log, () => {
    setShow(false);
  });

  const handleLogout = async () => {
    await dispatch(logout());
    await window.location.reload(false); // reload the page on logout
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <div className="p_head">
      <div className="p_head_left">{user.firstname}'s Profile</div>
      <div className="user_profile_head" ref={log}>
        <Link to="/notifications" className="svg">
          <AiOutlineBell />
        </Link>
        <div
          className={`${show === true ? "active user" : "user"}`}
          onClick={() => setShow((prev) => !prev)}
        >
          <img src={user.avatar?.url} alt="" />
          <p style={{ color: "green" }}>
            {user.firstname} {user.lastname}
          </p>
          {show === true ? (
            <RiArrowDownSLine style={{ transform: "rotate(180deg)" }} />
          ) : (
            <RiArrowDownSLine />
          )}
        </div>
        {show && (
          <div onClick={handleLogout} className="dropdown">
            <FiLogOut style={{ fontSize: "1.2rem" }} />
            <span>Logout</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
