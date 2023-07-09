import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TopHeader.scss";
import { AiFillSetting, AiOutlineBell } from "react-icons/ai";
import { FiHelpCircle, FiLogOut } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import useClickOutside from "../../utils/ClickOutSide";
import toast from "react-hot-toast";
import { logout } from "../../redux/actions/userActions";
import { MdArrowForwardIos, MdSecurity } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

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
          <div className="dropdown">
            <div className="prof">
              <Link to="/profile">
                <img src={user.avatar?.url} alt="" />
                <span>
                  <p>
                    {user?.firstname} {user?.lastname}
                  </p>
                  <p className="email">{user?.email}</p>
                </span>
              </Link>
              <MdArrowForwardIos />
            </div>
            <div className="mor">
              <div className="mor1">
                <div>
                  <AiFillSetting />
                  <span>Settings</span>
                </div>
                <MdArrowForwardIos />
              </div>
              <div className="mor1">
                <div>
                  <MdSecurity />
                  <span>Privacy & Security</span>
                </div>
                <MdArrowForwardIos />
              </div>
              <div className="mor1">
                <div>
                  <FiHelpCircle />
                  <span>Customer Support</span>
                </div>
                <MdArrowForwardIos />
              </div>
              <div className="mor1">
                <div>
                  <BsSend />
                  <span>Invite a Friend</span>
                </div>
                <MdArrowForwardIos />
              </div>
              <div className="mor1">
                <div>
                  <BiMoon />
                  <span>Display</span>
                </div>
                <MdArrowForwardIos />
              </div>
              <div onClick={handleLogout} className="mor1">
                <div>
                  <FiLogOut />
                  <span style={{ fontWeight: "bold" }}>Logout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
