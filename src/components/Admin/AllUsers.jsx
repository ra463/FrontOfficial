import React, { useEffect, useState } from "react";
import TableStructure from "./TableStructure";
import TopAdminHead from "./TopAdminHead";
import DashSidebar from "./DashSidebar";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../redux/actions/userActions";

const AllUsers = () => {
  const { users } = useSelector((state) => state.allusers);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <div
      className={`${show === true ? "admin_dash2 admin_dash" : "admin_dash"}`}
    >
      <DashSidebar show={show} setShow={setShow} />
      <div className="right_dash">
        <TopAdminHead />
        <div className="admin_container">
          <div className="admin_reports">
            <div className="head">
              <h2>All User's In Database</h2>
              <p>
                Total User's :{" "}
                <span className="total_reports">{users?.length}</span>
              </p>
            </div>
            <TableStructure users={users} pages="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
