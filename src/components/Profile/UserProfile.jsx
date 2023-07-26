import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.scss";
import { AiFillSetting } from "react-icons/ai";
import { BsCamera, BsKey } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import CompleteProfile from "./CompleteProfile";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

  const [visible, setVisible] = useState(0);
  return (
    <>
      <div className="p">
        <Sidebar />
        <div className="p_top scroll1">
          <TopHeader />
          <div className="back"></div>
          <div className="more_details">
            <div className="more_d">
              <div className="more_p">
                <img src={user.avatar?.url} alt="Profile" />
                <h3>
                  {user.firstname} {user.lastname}
                </h3>
                <p style={{ color: "lightslategray" }}>@{user.username}</p>
                <div className="more_i">
                  <div>
                    <p>Edit Profile</p>
                    <FiEdit2 />
                  </div>
                  <div>
                    <p>Edit Password</p>
                    <BsKey />
                  </div>
                  <div>
                    <p>Edit Avatar</p>
                    <BsCamera />
                  </div>
                  <div>
                    <p>Setting</p>
                    <AiFillSetting />
                  </div>
                </div>
                {user.role === "user" && (
                  <>
                    <div className="more">
                      <Link to="/missingreport">
                        <p style={{ color: "red" }}>Report Missing Person</p>
                      </Link>
                      <Link to="/foundmissing">
                        <p style={{ color: "green" }}>Found Missing Person</p>
                      </Link>
                    </div>
                  </>
                )}
              </div>
              <div className="details">
                {visible === 0 && (
                  <>
                    <div className="d_head">
                      <div className="d_head_inner">
                        <button className={visible === 0 ? "active" : ""}>
                          <span>Account Details</span>
                        </button>
                        <button onClick={() => setVisible(1)}>
                          <span>More Details</span>
                        </button>
                        <button
                          className="button"
                          onClick={() => setVisible(2)}
                        >
                          <span>Complete Profile</span>
                        </button>
                        <button>
                          <span>Settings</span>
                        </button>
                      </div>
                    </div>
                    <div className="d_body">
                      <div className="details_p">
                        <p className="small">First Name</p>
                        <div>{user.firstname && <p>{user.firstname}</p>}</div>
                        <p className="small">Phone Number</p>
                        <div>
                          <p>{user.phone ? user.phone : "Not Available"}</p>
                        </div>
                        <p className="small">Gender</p>
                        <div>
                          <p>{user.gender ? user.gender : "Not Available"}</p>
                        </div>
                        <p className="small">City</p>
                        <div>
                          <p>{user.city ? user.city : "Not Available"} </p>
                        </div>
                        <p className="small">Pin Code</p>
                        <div>
                          <p>{user.pincode ? user.pincode : "Not Available"}</p>
                        </div>
                      </div>
                      <div className="details_p">
                        <p className="small">Last Name</p>
                        <div>{user.lastname && <p>{user.lastname}</p>}</div>
                        <p className="small">Email Address</p>
                        <div>{user.email && <p>{user.email}</p>}</div>
                        <p className="small">Date of Birth</p>
                        <div>
                          <p>{user.dob ? user.dob : "Not Available"}</p>
                        </div>
                        <p className="small">State</p>
                        <div>
                          <p>{user.state ? user.state : "Not Available"}</p>
                        </div>
                        <p className="small">Country</p>
                        <div>
                          <p>India</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {visible === 1 && (
                  <>
                    <div className="d_head">
                      <div className="d_head_inner">
                        <button onClick={() => setVisible(0)}>
                          <span>Account Details</span>
                        </button>
                        <button className={visible === 1 ? "active" : ""}>
                          <span>More Details</span>
                        </button>

                        <button
                          className="button"
                          onClick={() => setVisible(2)}
                        >
                          <span>Complete Profile</span>
                        </button>

                        <button>
                          <span>Settings</span>
                        </button>
                      </div>
                    </div>
                    <div className="d_body">
                      <div className="details_p">
                        <p className="small">Your Address</p>
                        <div>
                          <p>{user.address ? user.address : "Not Available"}</p>
                        </div>
                        <p className="small">Adhaar</p>
                        <div>
                          <p>{user.adhaar ? user.adhaar : "Not Available"}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {visible === 2 && (
                  <>
                    <div className="d_head">
                      <div className="d_head_inner">
                        <button onClick={() => setVisible(0)}>
                          <span>Account Details</span>
                        </button>
                        <button onClick={() => setVisible(1)}>
                          <span>More Details</span>
                        </button>
                        <button className={visible === 2 ? "active" : ""}>
                          <span>Complete Profile</span>
                        </button>
                        <button>
                          <span>Settings</span>
                        </button>
                      </div>
                    </div>
                    <div style={{ width: "100%" }}>
                      <CompleteProfile />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
