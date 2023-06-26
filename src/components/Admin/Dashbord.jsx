import React, { useState } from "react";
import "./Dashbord.scss";
import DashSidebar from "./DashSidebar";
import TopAdminHead from "./TopAdminHead";

const Dashbord = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${show === true ? "admin_dash2 admin_dash" : "admin_dash"}`}
    >
      <DashSidebar show={show} setShow={setShow} />
      <div className="right_dash">
        <TopAdminHead />
      </div>
    </div>
  );
};

export default Dashbord;
