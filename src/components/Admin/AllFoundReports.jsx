import React, { useEffect, useState } from "react";
import TableStructure from "./TableStructure";
import TopAdminHead from "./TopAdminHead";
import DashSidebar from "./DashSidebar";
import { useDispatch, useSelector } from "react-redux";
import { allFoundReports } from "../../redux/actions/foundPersonActions";

const AllFoundReports = () => {
  const { foundreports } = useSelector((state) => state.allfoundreport);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allFoundReports());
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
              <h2>All Found Reports In Database</h2>
              <p>
                Total Found Reports Sumitted :{" "}
                <span className="total_reports">{foundreports?.length}</span>
              </p>
            </div>
            <TableStructure reports={foundreports} pages="found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoundReports;
