import React, { useEffect, useState } from "react";
import TableStructure from "./TableStructure";
import TopAdminHead from "./TopAdminHead";
import DashSidebar from "./DashSidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  allMissingReports,
  updateStatus,
} from "../../redux/actions/reportPersonAction";
import toast from "react-hot-toast";

const AllMissingReports = () => {
  const { missingreports } = useSelector((state) => state.allmissingreport);
  const { message, error } = useSelector((state) => state.updatestatus);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const updateStatusHandler = async (id) => {
    await dispatch(updateStatus(id));
  };

  useEffect(() => {
    dispatch(allMissingReports());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message, error]);

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
              <h2>All Missing Reports In Database</h2>
              <p>
                Total Missing Reports Sumitted :{" "}
                <span className="total_reports">{missingreports?.length}</span>
              </p>
            </div>
            <TableStructure
              updateStatus={updateStatusHandler}
              reports={missingreports}
              pages="missing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMissingReports;
