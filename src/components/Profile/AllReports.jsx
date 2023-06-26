import React, { useEffect } from "react";
import "./AllReports.scss";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllReport } from "../../redux/actions/reportPersonAction";
import { MdViewInAr } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { getAllFoundReport } from "../../redux/actions/foundPersonActions";

const AllReports = () => {
  const { reports, loading } = useSelector((state) => state.allReport);
  const { reports: foundreports, loading: foundloading } = useSelector(
    (state) => state.allfoundReport
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReport());
    dispatch(getAllFoundReport());
  }, [dispatch]);

  const color = "#ff5c35";

  return (
    <div className="p">
      <Sidebar />
      <div className="p_top scroll1">
        <TopHeader />
        <div className="back"></div>
        <div className="all_report">
          <div className="all_head">
            <h2>All Submitted Reports</h2>
          </div>
          {reports?.length === 0 && foundreports?.length === 0 && (
            <div
              className="not_found"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "66vh",
                width: "100%",
              }}
            >
              <img
                style={{
                  width: "10rem",
                }}
                src="/no-content.png"
                alt="not found"
              />
              <h2>No Report's Found</h2>
            </div>
          )}
          <div className="all_r">
            {loading && foundloading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "66vh",
                  width: "100%",
                }}
              >
                <PropagateLoader color={color} />
              </div>
            ) : (
              <>
                {reports &&
                  reports?.length > 0 &&
                  reports.map((report, i) => (
                    <div
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.11) 0px 1px 4px",
                      }}
                      className="repo"
                      key={i}
                    >
                      <div className="basic_d">
                        <p className="r_name">
                          Lost Person:{" "}
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            {report?.fullname}
                          </span>
                        </p>

                        <div className="container">
                          <p>
                            {/* Reported Date: {report?.createdAt?.split("T")[0]} */}
                            Reported Date:{" "}
                            <span
                              style={{
                                color: "green",
                              }}
                            >
                              {report?.localDate}
                            </span>
                          </p>
                          <p>
                            Reported At:{" "}
                            <span
                              style={{
                                color: "green",
                              }}
                            >
                              {report?.localTime}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="link">
                        <Link
                          to={`/allreports/lostpersonreport/${report?._id}`}
                        >
                          <MdViewInAr />
                          View Report
                        </Link>
                        <Link>
                          <FaRegShareSquare />
                          Share Report
                        </Link>
                      </div>
                    </div>
                  ))}
                {foundreports &&
                  foundreports?.length > 0 &&
                  foundreports.map((report, i) => (
                    <div
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.11) 0px 1px 4px",
                      }}
                      className="repo"
                      key={i}
                    >
                      <div className="basic_d">
                        <p className="r_name">
                          Found Person:{" "}
                          <span
                            style={{
                              color: "green",
                            }}
                          >
                            {report?.fullname}
                          </span>
                        </p>

                        <div className="container">
                          <p>
                            {/* Reported Date: {report?.createdAt?.split("T")[0]} */}
                            Reported Date:{" "}
                            <span
                              style={{
                                color: "green",
                              }}
                            >
                              {report?.localDate}
                            </span>
                          </p>
                          <p>
                            Reported At:{" "}
                            <span
                              style={{
                                color: "green",
                              }}
                            >
                              {report?.localTime}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="link">
                        <Link
                          to={`/allreports/foundpersonreport/${report?._id}`}
                        >
                          <MdViewInAr />
                          View Report
                        </Link>
                        <Link>
                          <FaRegShareSquare />
                          Share Report
                        </Link>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReports;
